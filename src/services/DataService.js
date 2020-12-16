import axios from "axios";
import {trackPromise} from 'react-promise-tracker';
import waitDialog from "./WaitDialog/WaitDialog";

const config = {headers: {'Content-Type': 'application/json;charset=UTF-8'}};

let storyUserInfos = {};

export const getStoryUserData = (userid) => storyUserInfos[userid];

export const setStoryUserData = (userid, name, img) => {
    // console.log(userid, name, img);
    if (storyUserInfos[userid]) {
        storyUserInfos[userid].name = name || storyUserInfos[userid].name;
        storyUserInfos[userid].img = img || storyUserInfos[userid].img;
    }
    else {
        storyUserInfos[userid] = {name: name, img: img};
    }
};



export const getLoginInfo = () => {
    let data = localStorage.getItem('loginUser');
    return (data) ? JSON.parse(data) : null;
};

export const deleteUser = (userid, callback) => {
    axios.get(`/php/deleteUser.php?id=${userid}`, config).then(res => {
        // console.log('deleteUser:', res.data.result);
        if (callback) callback(res.data);
    });
};

export const getUser = (uid, pwd, callback) => {
    axios.get(`/php/login.php?id=${uid}&pwd=${pwd}`).then(res => {
        // console.log('getUser:', res);
        if (res.data.result) {
             localStorage.setItem('userInfo', JSON.stringify(res.data.user));
        }
        if (callback) callback(res.data);
    });
};

export const getUserInfo = (uid, callback, passTrack) => {
    if (passTrack) {
        axios.get(`/php/getUser.php?userid=${uid}`, config).then(res => {
            const {name, profileimg} = res.data;
            setStoryUserData(uid, name, profileimg);
            if (callback) callback(res.data);
        })
    }
    else {
        trackPromise(
            axios.get(`/php/getUser.php?userid=${uid}`, config).then(res => {
                const {name, profileimg} = res.data;
                setStoryUserData(uid, name, profileimg);
                if (callback) callback(res.data);
            })
        );
    }
};

export const getUserInfoAll = (callback) => {
    axios.get(`/php/getUserInfoAll.php`, config).then(res => {
        res.data.users.forEach(v => setStoryUserData(v.id, v.name, v.profileimg));
        // console.log(res.data);
        if (callback) callback(res.data);
    })
};


export const putUser = (data, callback) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));
    axios.post(`/php/signup.php`, formData).then(res => {
        // console.log('putUser:', res.data);
        getUserInfo(data.id, () => {
            // console.log('pass')
        }, true);
        if (callback) callback(res.data);
    });

};

export const logout = (callback) => {
    // localStorage.removeItem('loginUser');
    axios.get(`/php/logout.php`, config).then(res => {
        // console.log('logout:', res.data.result);
        if (callback) callback(res.data.result);
    });
};

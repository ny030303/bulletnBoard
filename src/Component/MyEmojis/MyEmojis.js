import * as React from 'react';
import "./MyEmojis.css";

export class MyEmojis extends React.Component {

    constructor(props) {
        super(props);
        this.emojiList = {
            smileys: {
                title: 'Smileys',
                datas: [
                    "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "🥰", "😗", "😙", "😚", "☺️",
                    "🙂", "🤗", "🤩", "🤔", "🤨", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "😴", "😌", "😛",
                    "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "☹", "🙁", "😖", "😞", "😟", "😤", "😢", "😭", "😦", "😧",
                    "😨", "😩", "🤯", "😬", "😰", "😱", "🥵", "🥶", "😳", "🤪", "😵", "😡", "😠", "🤬", "😷", "🤒", "🤕", "🤢", "🤮",
                    "🤧", "😇", "🤠", "🤡", "🥳", "🥴", "🥺", "🤥", "🤫", "🤭", "🧐", "🤓", "😈", "👿", "👹", "👺", "💀", "👻", "👽",
                    "🤖", "💩", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾"
                ]
            },
            peopleAndFantasy: {
                title: 'People and Fantasy',
                datas: [
                    "👶", "👧", "🧒", "👦", "👩", "🧑", "👨", "👵", "🧓", "👴", "👲", "👳‍♀️", "👳‍♂️", "🧕", "🧔",
                    "👱‍♂️", "👱‍♀️", "👨‍🦰", "👩‍🦰", "👨‍🦱", "👩‍🦱", "👨‍🦲", "👩‍🦲", "👨‍🦳", "👩‍🦳", "🦸‍♀️", "🦸‍♂️", "🦹‍♀️",
                    "🦹‍♂️", "👮‍♀️", "👮‍♂️", "👷‍♀️", "👷‍♂️", "💂‍♀️", "💂‍♂️", "🕵️‍♀️", "🕵️‍♂️", "👩‍⚕️", "👨‍⚕️",
                    "👩‍🌾", "👨‍🌾", "👩‍🍳", "👨‍🍳", "👩‍🎓", "👨‍🎓", "👩‍🎤", "👨‍🎤", "👩‍🏫", "👨‍🏫", "👩‍🏭", "👨‍🏭", "👩‍💻", "👨‍💻", "👩‍💼",
                    "👨‍💼", "👩‍🔧", "👨‍🔧", "👩‍🔬", "👨‍🔬", "👩‍🎨", "👨‍🎨", "👩‍🚒", "👨‍🚒", "👩‍✈️", "👨‍✈️", "👩‍🚀", "👨‍🚀", "👩‍⚖️",
                    "👨‍⚖️", "👰", "🤵", "👸", "🤴", "🤶", "🎅", "🧙‍♀️", "🧙‍♂️", "🧝‍♀️", "🧝‍♂️", "🧛‍♀️", "🧛‍♂️", "🧟‍♀️",
                    "🧟‍♂️", "🧞‍♀️", "🧞‍♂️", "🧜‍♀️", "🧜‍♂️", "🧚‍♀️", "🧚‍♂️", "👼", "🤰", "🤱", "🙇‍♀️", "🙇‍♂️", "💁‍♀️",
                    "💁‍♂️", "🙅‍♀️", "🙅‍♂️", "🙆‍♀️", "🙆‍♂️", "🙋‍♀️", "🙋‍♂️", "🤦‍♀️", "🤦‍♂️", "🤷‍♀️", "🤷‍♂️", "🙎‍♀️",
                    "🙎‍♂️", "🙍‍♀️", "🙍‍♂️", "💇‍♀️", "💇‍♂️", "💆‍♀️", "💆‍♂️", "🧖‍♀️", "🧖‍♂️", "💅", "🤳", "💃", "🕺",
                    "👯‍♀️", "👯‍♂️", "🕴", "🚶‍♀️", "🚶‍♂️", "🏃‍♀️", "🏃‍♂️", "👫", "👭", "👬", "💑", "👩‍❤️‍👩", "👨‍❤️‍👨", "💏",
                    "👩‍❤️‍💋‍👩", "👨‍❤️‍💋‍👨", "👪", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧‍👧", "👩‍👩‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👩‍👩‍👦‍👦",
                    "👩‍👩‍👧‍👧", "👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👨‍👨‍👦‍👦", "👨‍👨‍👧‍👧", "👩‍👦", "👩‍👧", "👩‍👧‍👦", "👩‍👦‍👦", "👩‍👧‍👧", "👨‍👦", "👨‍👧",
                    "👨‍👧‍👦", "👨‍👦‍👦", "👨‍👧‍👧", "🤲", "👐", "🙌", "👏", "🤝", "👍", "👎", "👊", "✊", "🤛", "🤜", "🤞", "✌️", "🤟", "🤘", "👌",
                    "👈", "👉", "👆", "👇", "☝️", "✋", "🤚", "🖐", "🖖", "👋", "🤙", "💪", "🦵", "🦶", "🖕", "✍️", "🙏", "💍", "💄", "💋",
                    "👄", "👅", "👂", "👃", "👣", "👁", "👀", "🧠", "🦴", "🦷", "🗣", "👤", "👥"
                ]
            },
            clothingAndAccessories: {
                title: 'Clothing and Accessories',
                datas: [
                    "🧥", "👚", "👕", "👖", "👔", "👗", "👙", "👘", "👠", "👡", "👢", "👞", "👟", "🥾", "🥿", "🧦", "🧤", "🧣", "🎩", "🧢",
                    "👒", "🎓", "⛑", "👑", "👝", "👛", "👜", "💼", "🎒", "👓", "🕶", "🥽", "🥼", "🌂", "🧵", "🧶"
                ]
            },
            paleEmojis: {
                title: 'Pale Emojis',
                datas: [
                    "👶🏻", "👦🏻", "👧🏻", "👨🏻", "👩🏻", "👱🏻‍♀️", "👱🏻", "👴🏻", "👵🏻", "👲🏻", "👳🏻‍♀️", "👳🏻", "👮🏻‍♀️", "👮🏻", "👷🏻‍♀️", "👷🏻",
                    "💂🏻‍♀️", "💂🏻", "🕵🏻‍♀️", "🕵🏻", "👩🏻‍⚕️", "👨🏻‍⚕️", "👩🏻‍🌾", "👨🏻‍🌾", "👩🏻‍🍳", "👨🏻‍🍳", "👩🏻‍🎓", "👨🏻‍🎓", "👩🏻‍🎤", "👨🏻‍🎤",
                    "👩🏻‍🏫", "👨🏻‍🏫", "👩🏻‍🏭", "👨🏻‍🏭", "👩🏻‍💻", "👨🏻‍💻", "👩🏻‍💼", "👨🏻‍💼", "👩🏻‍🔧", "👨🏻‍🔧", "👩🏻‍🔬", "👨🏻‍🔬", "👩🏻‍🎨", "👨🏻‍🎨", "👩🏻‍🚒", "👨🏻‍🚒",
                    "👩🏻‍✈️", "👨🏻‍✈️", "👩🏻‍🚀", "👨🏻‍🚀", "👩🏻‍⚖️", "👨🏻‍⚖️", "🤶🏻", "🎅🏻", "👸🏻", "🤴🏻", "👰🏻", "🤵🏻", "👼🏻", "🤰🏻", "🙇🏻‍♀️",
                    "🙇🏻", "💁🏻", "💁🏻‍♂️", "🙅🏻", "🙅🏻‍♂️", "🙆🏻", "🙆🏻‍♂️", "🙋🏻", "🙋🏻‍♂️", "🤦🏻‍♀️", "🤦🏻‍♂️", "🤷🏻‍♀️", "🤷🏻‍♂️", "🙎🏻",
                    "🙎🏻‍♂️", "🙍🏻", "🙍🏻‍♂️", "💇🏻", "💇🏻‍♂️", "💆🏻", "💆🏻‍♂️", "🕴🏻", "💃🏻", "🕺🏻", "🚶🏻‍♀️", "🚶🏻", "🏃🏻‍♀️", "🏃🏻",
                    "🤲🏻", "👐🏻", "🙌🏻", "👏🏻", "🙏🏻", "👍🏻", "👎🏻", "👊🏻", "✊🏻", "🤛🏻", "🤜🏻", "🤞🏻", "✌🏻", "🤟🏻", "🤘🏻", "👌🏻", "👈🏻", "👉🏻", "👆🏻", "👇🏻",
                    "☝🏻", "✋🏻", "🤚🏻", "🖐🏻", "🖖🏻", "👋🏻", "🤙🏻", "💪🏻", "🖕🏻", "✍🏻", "🤳🏻", "💅🏻", "👂🏻", "👃🏻"
                ]
            },
            creamWhiteEmojis: {
                title: 'Cream White Emojis',
                datas: [
                    "👶🏼", "👦🏼", "👧🏼", "👨🏼", "👩🏼", "👱🏼‍♀️", "👱🏼", "👴🏼", "👵🏼", "👲🏼", "👳🏼‍♀️", "👳🏼", "👮🏼‍♀️", "👮🏼", "👷🏼‍♀️",
                    "👷🏼", "💂🏼‍♀️", "💂🏼", "🕵🏼‍♀️", "🕵🏼", "👩🏼‍⚕️", "👨🏼‍⚕️", "👩🏼‍🌾", "👨🏼‍🌾", "👩🏼‍🍳", "👨🏼‍🍳", "👩🏼‍🎓", "👨🏼‍🎓", "👩🏼‍🎤",
                    "👨🏼‍🎤", "👩🏼‍🏫", "👨🏼‍🏫", "👩🏼‍🏭", "👨🏼‍🏭", "👩🏼‍💻", "👨🏼‍💻", "👩🏼‍💼", "👨🏼‍💼", "👩🏼‍🔧", "👨🏼‍🔧", "👩🏼‍🔬", "👨🏼‍🔬", "👩🏼‍🎨", "👨🏼‍🎨",
                    "👩🏼‍🚒", "👨🏼‍🚒", "👩🏼‍✈️", "👨🏼‍✈️", "👩🏼‍🚀", "👨🏼‍🚀", "👩🏼‍⚖️", "👨🏼‍⚖️", "🤶🏼", "🎅🏼", "👸🏼", "🤴🏼", "👰🏼", "🤵🏼", "👼🏼",
                    "🤰🏼", "🙇🏼‍♀️", "🙇🏼", "💁🏼", "💁🏼‍♂️", "🙅🏼", "🙅🏼‍♂️", "🙆🏼", "🙆🏼‍♂️", "🙋🏼", "🙋🏼‍♂️", "🤦🏼‍♀️", "🤦🏼‍♂️", "🤷🏼‍♀️",
                    "🤷🏼‍♂️", "🙎🏼", "🙎🏼‍♂️", "🙍🏼", "🙍🏼‍♂️", "💇🏼", "💇🏼‍♂️", "💆🏼", "💆🏼‍♂️", "🕴🏼", "💃🏼", "🕺🏼", "🚶🏼‍♀️", "🚶🏼", "🏃🏼‍♀️",
                    "🏃🏼", "🤲🏼", "👐🏼", "🙌🏼", "👏🏼", "🙏🏼", "👍🏼", "👎🏼", "👊🏼", "✊🏼", "🤛🏼", "🤜🏼", "🤞🏼", "✌🏼", "🤟🏼", "🤘🏼", "👌🏼", "👈🏼", "👉🏼", "👆🏼", "👇🏼",
                    "☝🏼", "✋🏼", "🤚🏼", "🖐🏼", "🖖🏼", "👋🏼", "🤙🏼", "💪🏼", "🖕🏼", "✍🏼", "🤳🏼", "💅🏼", "👂🏼", "👃🏼"
                ]
            },
            moderateBrownEmojis: {
                title: 'Moderate Brown Emojis',
                datas: [
                    "👶🏽", "👦🏽", "👧🏽", "👨🏽", "👩🏽", "👱🏽‍♀️", "👱🏽", "👴🏽", "👵🏽", "👲🏽", "👳🏽‍♀️", "👳🏽", "👮🏽‍♀️", "👮🏽",
                    "👷🏽‍♀️", "👷🏽", "💂🏽‍♀️", "💂🏽", "🕵🏽‍♀️", "🕵🏽", "👩🏽‍⚕️", "👨🏽‍⚕️", "👩🏽‍🌾", "👨🏽‍🌾", "👩🏽‍🍳", "👨🏽‍🍳", "👩🏽‍🎓",
                    "👨🏽‍🎓", "👩🏽‍🎤", "👨🏽‍🎤", "👩🏽‍🏫", "👨🏽‍🏫", "👩🏽‍🏭", "👨🏽‍🏭", "👩🏽‍💻", "👨🏽‍💻", "👩🏽‍💼", "👨🏽‍💼", "👩🏽‍🔧", "👨🏽‍🔧", "👩🏽‍🔬", "👨🏽‍🔬",
                    "👩🏽‍🎨", "👨🏽‍🎨", "👩🏽‍🚒", "👨🏽‍🚒", "👩🏽‍✈️", "👨🏽‍✈️", "👩🏽‍🚀", "👨🏽‍🚀", "👩🏽‍⚖️", "👨🏽‍⚖️", "🤶🏽", "🎅🏽", "👸🏽", "🤴🏽",
                    "👰🏽", "🤵🏽", "👼🏽", "🤰🏽", "🙇🏽‍♀️", "🙇🏽", "💁🏽", "💁🏽‍♂️", "🙅🏽", "🙅🏽‍♂️", "🙆🏽", "🙆🏽‍♂️", "🙋🏽", "🙋🏽‍♂️", "🤦🏽‍♀️",
                    "🤦🏽‍♂️", "🤷🏽‍♀️", "🤷🏽‍♂️", "🙎🏽", "🙎🏽‍♂️", "🙍🏽", "🙍🏽‍♂️", "💇🏽", "💇🏽‍♂️", "💆🏽", "💆🏽‍♂️", "🕴🏼", "💃🏽", "🕺🏽",
                    "🚶🏽‍♀️", "🚶🏽", "🏃🏽‍♀️", "🏃🏽", "🤲🏽", "👐🏽", "🙌🏽", "👏🏽", "🙏🏽", "👍🏽", "👎🏽", "👊🏽", "✊🏽", "🤛🏽", "🤜🏽", "🤞🏽", "✌🏽",
                    "🤟🏽", "🤘🏽", "👌🏽", "👈🏽", "👉🏽", "👆🏽", "👇🏽", "☝🏽", "✋🏽", "🤚🏽", "🖐🏽", "🖖🏽", "👋🏽", "🤙🏽", "💪🏽", "🖕🏽", "✍🏽", "🤳🏽", "💅🏽",
                    "👂🏽", "👃🏽"
                ]
            },
            darkBrownEmojis: {
                title: 'Dark Brown Emojis',
                datas: [
                    "👶🏾", "👦🏾", "👧🏾", "👨🏾", "👩🏾", "👱🏾‍♀️", "👱🏾", "👴🏾", "👵🏾", "👲🏾", "👳🏾‍♀️", "👳🏾", "👮🏾‍♀️", "👮🏾", "👷🏾‍♀️",
                    "👷🏾", "💂🏾‍♀️", "💂🏾", "🕵🏾‍♀️", "🕵🏾", "👩🏾‍⚕️", "👨🏾‍⚕️", "👩🏾‍🌾", "👨🏾‍🌾", "👩🏾‍🍳", "👨🏾‍🍳", "👩🏾‍🎓", "👨🏾‍🎓", "👩🏾‍🎤",
                    "👨🏾‍🎤", "👩🏾‍🏫", "👨🏾‍🏫", "👩🏾‍🏭", "👨🏾‍🏭", "👩🏾‍💻", "👨🏾‍💻", "👩🏾‍💼", "👨🏾‍💼", "👩🏾‍🔧", "👨🏾‍🔧", "👩🏾‍🔬", "👨🏾‍🔬", "👩🏾‍🎨", "👨🏾‍🎨", "👩🏾‍🚒",
                    "👨🏾‍🚒", "👩🏾‍✈️", "👨🏾‍✈️", "👩🏾‍🚀", "👨🏾‍🚀", "👩🏾‍⚖️", "👨🏾‍⚖️", "🤶🏾", "🎅🏾", "👸🏾", "🤴🏾", "👰🏾", "🤵🏾", "👼🏾", "🤰🏾",
                    "🙇🏾‍♀️", "🙇🏾", "💁🏾", "💁🏾‍♂️", "🙅🏾", "🙅🏾‍♂️", "🙆🏾", "🙆🏾‍♂️", "🙋🏾", "🙋🏾‍♂️", "🤦🏾‍♀️", "🤦🏾‍♂️", "🤷🏾‍♀️", "🤷🏾‍♂️",
                    "🙎🏾", "🙎🏾‍♂️", "🙍🏾", "🙍🏾‍♂️", "💇🏾", "💇🏾‍♂️", "💆🏾", "💆🏾‍♂️", "🕴🏾", "💃🏾", "🕺🏾", "🚶🏾‍♀️", "🚶🏾", "🏃🏾‍♀️",
                    "🏃🏾", "🤲🏾", "👐🏾", "🙌🏾", "👏🏾", "🙏🏾", "👍🏾", "👎🏾", "👊🏾", "✊🏾", "🤛🏾", "🤜🏾", "🤞🏾", "✌🏾", "🤟🏾", "🤘🏾", "👌🏾", "👈🏾", "👉🏾", "👆🏾",
                    "👇🏾", "☝🏾", "✋🏾", "🤚🏾", "🖐🏾", "🖖🏾", "👋🏾", "🤙🏾", "💪🏾", "🖕🏾", "✍🏾", "🤳🏾", "💅🏾", "👂🏾", "👃🏾"
                ]
            },
            blackEmojis: {
                title: 'Black Emojis',
                datas: [
                    "👶🏿", "👦🏿", "👧🏿", "👨🏿", "👩🏿", "👱🏿‍♀️", "👱🏿", "👴🏿", "👵🏿", "👲🏿", "👳🏿‍♀️", "👳🏿", "👮🏿‍♀️", "👮🏿", "👷🏿‍♀️", "👷🏿",
                    "💂🏿‍♀️", "💂🏿", "🕵🏿‍♀️", "🕵🏿", "👩🏿‍⚕️", "👨🏿‍⚕️", "👩🏿‍🌾", "👨🏿‍🌾", "👩🏿‍🍳", "👨🏿‍🍳", "👩🏿‍🎓", "👨🏿‍🎓", "👩🏿‍🎤", "👨🏿‍🎤",
                    "👩🏿‍🏫", "👨🏿‍🏫", "👩🏿‍🏭", "👨🏿‍🏭", "👩🏿‍💻", "👨🏿‍💻", "👩🏿‍💼", "👨🏿‍💼", "👩🏿‍🔧", "👨🏿‍🔧", "👩🏿‍🔬", "👨🏿‍🔬", "👩🏿‍🎨", "👨🏿‍🎨", "👩🏿‍🚒", "👨🏿‍🚒",
                    "👩🏿‍✈️", "👨🏿‍✈️", "👩🏿‍🚀", "👨🏿‍🚀", "👩🏿‍⚖️", "👨🏿‍⚖️", "🤶🏿", "🎅🏿", "👸🏿", "🤴🏿", "👰🏿", "🤵🏿", "👼🏿", "🤰🏿", "🙇🏿‍♀️", "🙇🏿",
                    "💁🏿", "💁🏿‍♂️", "🙅🏿", "🙅🏿‍♂️", "🙆🏿", "🙆🏿‍♂️", "🙋🏿", "🙋🏿‍♂️", "🤦🏿‍♀️", "🤦🏿‍♂️", "🤷🏿‍♀️", "🤷🏿‍♂️", "🙎🏿", "🙎🏿‍♂️",
                    "🙍🏿", "🙍🏿‍♂️", "💇🏿", "💇🏿‍♂️", "💆🏿", "💆🏿‍♂️", "🕴🏿", "💃🏿", "🕺🏿", "🚶🏿‍♀️", "🚶🏿", "🏃🏿‍♀️", "🏃🏿", "🤲🏿", "👐🏿",
                    "🙌🏿", "👏🏿", "🙏🏿", "👍🏿", "👎🏿", "👊🏿", "✊🏿", "🤛🏿", "🤜🏿", "🤞🏿", "✌🏿", "🤟🏿", "🤘🏿", "👌🏿", "👈🏿", "👉🏿", "👆🏿", "👇🏿", "☝🏿", "✋🏿", "🤚🏿",
                    "🖐🏿", "🖖🏿", "👋🏿", "🤙🏿", "💪🏿", "🖕🏿", "✍🏿", "🤳🏿", "💅🏿", "👂🏿", "👃🏿"
                ]
            },
            animalsAndNature: {
                title: 'Animals & Nature',
                datas: [
                    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🦝", "🐻", "🐼", "🦘", "🦡", "🐨", "🐯", "🦁", "🐮", "🐷", "🐽", "🐸",
                    "🐵", "🙈", "🙉", "🙊", "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦢", "🦅", "🦉", "🦚", "🦜", "🦇", "🐺", "🐗", "🐴",
                    "🦄", "🐝", "🐛", "🦋", "🐌", "🐚", "🐞", "🐜", "🦗", "🕷", "🕸", "🦂", "🦟", "🦠", "🐢", "🐍", "🦎", "🦖", "🦕", "🐙", "🦑",
                    "🦐", "🦀", "🐡", "🐠", "🐟", "🐬", "🐳", "🐋", "🦈", "🐊", "🐅", "🐆", "🦓", "🦍", "🐘", "🦏", "🦛", "🐪", "🐫", "🦙", "🦒",
                    "🐃", "🐂", "🐄", "🐎", "🐖", "🐏", "🐑", "🐐", "🦌", "🐕", "🐩", "🐈", "🐓", "🦃", "🕊", "🐇", "🐁", "🐀", "🐿", "🦔", "🐾", "🐉",
                    "🐲", "🌵", "🎄", "🌲", "🌳", "🌴", "🌱", "🌿", "☘️", "🍀", "🎍", "🎋", "🍃", "🍂", "🍁", "🍄", "🌾", "💐", "🌷", "🌹", "🥀",
                    "🌺", "🌸", "🌼", "🌻", "🌞", "🌝", "🌛", "🌜", "🌚", "🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", "🌔", "🌙", "🌎", "🌍", "🌏",
                    "💫", "⭐️", "🌟", "✨", "⚡️", "☄️", "💥", "🔥", "🌪", "🌈", "☀️", "🌤", "⛅️", "🌥", "☁️", "🌦", "🌧", "⛈",
                    "🌩", "🌨", "❄️", "☃️", "⛄️", "🌬", "💨", "💧", "💦", "☔️", "☂️", "🌊", "🌫"
                ]
            },
            foodAndDrink: {
                title: 'Food & Drink',
                datas: [
                    "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🍍", "🥭", "🥥", "🥝", "🍅", "🍆", "🥑",
                    "🥦", "🥒", "🥬", "🌶", "🌽", "🥕", "🥔", "🍠", "🥐", "🍞", "🥖", "🥨", "🥯", "🧀", "🥚", "🍳", "🥞", "🥓", "🥩", "🍗", "🍖",
                    "🌭", "🍔", "🍟", "🍕", "🥪", "🥙", "🌮", "🌯", "🥗", "🥘", "🥫", "🍝", "🍜", "🍲", "🍛", "🍣", "🍱", "🥟", "🍤", "🍙", "🍚",
                    "🍘", "🍥", "🥮", "🥠", "🍢", "🍡", "🍧", "🍨", "🍦", "🥧", "🍰", "🎂", "🍮", "🍭", "🍬", "🍫", "🍿", "🧂", "🍩", "🍪", "🌰",
                    "🥜", "🍯", "🥛", "🍼", "☕️", "🍵", "🥤", "🍶", "🍺", "🍻", "🥂", "🍷", "🥃", "🍸", "🍹", "🍾", "🥄", "🍴", "🍽", "🥣",
                    "🥡", "🥢"
                ]
            },
            activityAndSports: {
                title: 'Activity and Sports',
                datas: ["⚽️", "🏀", "🏈", "⚾️", "🥎", "🏐", "🏉", "🎾", "🥏", "🎱", "🏓", "🏸", "🥅", "🏒", "🏑", "🥍", "🏏",
                    "⛳️", "🏹", "🎣", "🥊", "🥋", "🎽", "⛸", "🥌", "🛷", "🛹", "🎿", "⛷", "🏂", "🏋️‍♀️", "🏋🏻‍♀️", "🏋🏼‍♀️", "🏋🏽‍♀️",
                    "🏋🏾‍♀️", "🏋🏿‍♀️", "🏋️‍♂️", "🏋🏻‍♂️", "🏋🏼‍♂️", "🏋🏽‍♂️", "🏋🏾‍♂️", "🏋🏿‍♂️", "🤼‍♀️", "🤼‍♂️", "🤸‍♀️",
                    "🤸🏻‍♀️", "🤸🏼‍♀️", "🤸🏽‍♀️", "🤸🏾‍♀️", "🤸🏿‍♀️", "🤸‍♂️", "🤸🏻‍♂️", "🤸🏼‍♂️", "🤸🏽‍♂️", "🤸🏾‍♂️",
                    "🤸🏿‍♂️", "⛹️‍♀️", "⛹🏻‍♀️", "⛹🏼‍♀️", "⛹🏽‍♀️", "⛹🏾‍♀️", "⛹🏿‍♀️", "⛹️‍♂️", "⛹🏻‍♂️", "⛹🏼‍♂️",
                    "⛹🏽‍♂️", "⛹🏾‍♂️", "⛹🏿‍♂️", "🤺", "🤾‍♀️", "🤾🏻‍♀️", "🤾🏼‍♀️", "🤾🏾‍♀️", "🤾🏾‍♀️", "🤾🏿‍♀️", "🤾‍♂️",
                    "🤾🏻‍♂️", "🤾🏼‍♂️", "🤾🏽‍♂️", "🤾🏾‍♂️", "🤾🏿‍♂️", "🏌️‍♀️", "🏌🏻‍♀️", "🏌🏼‍♀️", "🏌🏽‍♀️", "🏌🏾‍♀️", "🏌🏿‍♀️",
                    "🏌️‍♂️", "🏌🏻‍♂️", "🏌🏼‍♂️", "🏌🏽‍♂️", "🏌🏾‍♂️", "🏌🏿‍♂️", "🏇", "🏇🏻", "🏇🏼", "🏇🏽", "🏇🏾", "🏇🏿", "🧘‍♀️",
                    "🧘🏻‍♀️", "🧘🏼‍♀️", "🧘🏽‍♀️", "🧘🏾‍♀️", "🧘🏿‍♀️", "🧘‍♂️", "🧘🏻‍♂️", "🧘🏼‍♂️", "🧘🏽‍♂️", "🧘🏾‍♂️",
                    "🧘🏿‍♂️", "🏄‍♀️", "🏄🏻‍♀️", "🏄🏼‍♀️", "🏄🏽‍♀️", "🏄🏾‍♀️", "🏄🏿‍♀️", "🏄‍♂️", "🏄🏻‍♂️", "🏄🏼‍♂️", "🏄🏽‍♂️",
                    "🏄🏾‍♂️", "🏄🏿‍♂️", "🏊‍♀️", "🏊🏻‍♀️", "🏊🏼‍♀️", "🏊🏽‍♀️", "🏊🏾‍♀️", "🏊🏿‍♀️", "🏊‍♂️", "🏊🏻‍♂️", "🏊🏼‍♂️",
                    "🏊🏽‍♂️", "🏊🏾‍♂️", "🏊🏿‍♂️", "🤽‍♀️", "🤽🏻‍♀️", "🤽🏼‍♀️", "🤽🏽‍♀️", "🤽🏾‍♀️", "🤽🏿‍♀️", "🤽‍♂️", "🤽🏻‍♂️",
                    "🤽🏼‍♂️", "🤽🏽‍♂️", "🤽🏾‍♂️", "🤽🏿‍♂️", "🚣‍♀️", "🚣🏻‍♀️", "🚣🏼‍♀️", "🚣🏽‍♀️", "🚣🏾‍♀️", "🚣🏿‍♀️", "🚣‍♂️",
                    "🚣🏻‍♂️", "🚣🏼‍♂️", "🚣🏽‍♂️", "🚣🏾‍♂️", "🚣🏿‍♂️", "🧗‍♀️", "🧗🏻‍♀️", "🧗🏼‍♀️", "🧗🏽‍♀️", "🧗🏾‍♀️", "🧗🏿‍♀️",
                    "🧗‍♂️", "🧗🏻‍♂️", "🧗🏼‍♂️", "🧗🏽‍♂️", "🧗🏾‍♂️", "🧗🏿‍♂️", "🚵‍♀️", "🚵🏻‍♀️", "🚵🏼‍♀️", "🚵🏽‍♀️", "🚵🏾‍♀️",
                    "🚵🏿‍♀️", "🚵‍♂️", "🚵🏻‍♂️", "🚵🏼‍♂️", "🚵🏽‍♂️", "🚵🏾‍♂️", "🚵🏿‍♂️", "🚴‍♀️", "🚴🏻‍♀️", "🚴🏼‍♀️", "🚴🏽‍♀️",
                    "🚴🏾‍♀️", "🚴🏿‍♀️", "🚴‍♂️", "🚴🏻‍♂️", "🚴🏼‍♂️", "🚴🏽‍♂️", "🚴🏾‍♂️", "🚴🏿‍♂️", "🏆", "🥇", "🥈", "🥉", "🏅", "🎖",
                    "🏵", "🎗", "🎫", "🎟", "🎪", "🤹‍♀️", "🤹🏻‍♀️", "🤹🏼‍♀️", "🤹🏽‍♀️", "🤹🏾‍♀️", "🤹🏿‍♀️", "🤹‍♂️", "🤹🏻‍♂️", "🤹🏼‍♂️", "🤹🏽‍♂️",
                    "🤹🏾‍♂️", "🤹🏿‍♂️", "🎭", "🎨", "🎬", "🎤", "🎧", "🎼", "🎹", "🥁", "🎷", "🎺", "🎸", "🎻", "🎲", "🧩", "♟", "🎯", "🎳", "🎮", "🎰"
                ]
            },
            travelAndPlaces: {
                title: 'Travel & Places',
                datas: [
                    "🚗", "🚕", "🚙", "🚌", "🚎", "🏎", "🚓", "🚑", "🚒", "🚐", "🚚", "🚛", "🚜", "🛴", "🚲", "🛵", "🏍", "🚨", "🚔", "🚍",
                    "🚘", "🚖", "🚡", "🚠", "🚟", "🚃", "🚋", "🚞", "🚝", "🚄", "🚅", "🚈", "🚂", "🚆", "🚇", "🚊", "🚉", "✈️", "🛫", "🛬", "🛩", "💺",
                    "🛰", "🚀", "🛸", "🚁", "🛶", "⛵️", "🚤", "🛥", "🛳", "⛴", "🚢", "⚓️", "⛽️", "🚧", "🚦", "🚥", "🚏", "🗺", "🗿", "🗽", "🗼",
                    "🏰", "🏯", "🏟", "🎡", "🎢", "🎠", "⛲️", "⛱", "🏖", "🏝", "🏜", "🌋", "⛰", "🏔", "🗻", "🏕", "⛺️", "🏠", "🏡", "🏘", "🏚",
                    "🏗", "🏭", "🏢", "🏬", "🏣", "🏤", "🏥", "🏦", "🏨", "🏪", "🏫", "🏩", "💒", "🏛", "⛪️", "🕌", "🕍", "🕋", "⛩", "🛤", "🛣", "🗾",
                    "🎑", "🏞", "🌅", "🌄", "🌠", "🎇", "🎆", "🌇", "🌆", "🏙", "🌃", "🌌", "🌉", "🌁"
                ]
            },
            objects: {
                title: 'Objects',
                datas: [
                    "⌚️", "📱", "📲", "💻", "⌨️", "🖥", "🖨", "🖱", "🖲", "🕹", "🗜", "💽", "💾", "💿", "📀", "📼", "📷", "📸", "📹", "🎥",
                    "📽", "🎞", "📞", "☎️", "📟", "📠", "📺", "📻", "🎙", "🎚", "🎛", "⏱", "⏲", "⏰", "🕰", "⌛️", "⏳", "📡", "🔋", "🔌", "💡", "🔦",
                    "🕯", "🗑", "🛢", "💸", "💵", "💴", "💶", "💷", "💰", "💳", "🧾", "💎", "⚖️", "🔧", "🔨", "⚒", "🛠", "⛏", "🔩", "⚙️", "⛓", "🔫",
                    "💣", "🔪", "🗡", "⚔️", "🛡", "🚬", "⚰️", "⚱️", "🏺", "🧭", "🧱", "🔮", "🧿", "🧸", "📿", "💈", "⚗️", "🔭", "🧰", "🧲",
                    "🧪", "🧫", "🧬", "🧯", "🔬", "🕳", "💊", "💉", "🌡", "🚽", "🚰", "🚿", "🛁", "🛀", "🛀🏻", "🛀🏼", "🛀🏽", "🛀🏾", "🛀🏿", "🧴", "🧵",
                    "🧶", "🧷", "🧹", "🧺", "🧻", "🧼", "🧽", "🛎", "🔑", "🗝", "🚪", "🛋", "🛏", "🛌", "🖼", "🛍", "🧳", "🛒", "🎁", "🎈", "🎏", "🎀",
                    "🎊", "🎉", "🧨", "🎎", "🏮", "🎐", "🧧", "✉️", "📩", "📨", "📧", "💌", "📥", "📤", "📦", "🏷", "📪", "📫", "📬", "📭", "📮", "📯",
                    "📜", "📃", "📄", "📑", "📊", "📈", "📉", "🗒", "🗓", "📆", "📅", "📇", "🗃", "🗳", "🗄", "📋", "📁", "📂", "🗂", "🗞", "📰", "📓", "📔",
                    "📒", "📕", "📗", "📘", "📙", "📚", "📖", "🔖", "🔗", "📎", "🖇", "📐", "📏", "📌", "📍", "✂️", "🖊", "🖋", "✒️", "🖌", "🖍", "📝",
                    "✏️", "🔍", "🔎", "🔏", "🔐", "🔒", "🔓"
                ]
            },
            symbols: {
                title: 'Symbols',
                datas: [
                    "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "☮️", "✝️",
                    "☪️", "🕉", "☸️", "✡️", "🔯", "🕎", "☯️", "☦️", "🛐", "⛎", "♈️", "♉️", "♊️", "♋️", "♌️", "♍️",
                    "♎️", "♏️", "♐️", "♑️", "♒️", "♓️", "🆔", "⚛️", "🉑", "☢️", "☣️", "📴", "📳", "🈶", "🈚️", "🈸", "🈺",
                    "🈷️", "✴️", "🆚", "💮", "🉐", "㊙️", "㊗️", "🈴", "🈵", "🈹", "🈲", "🅰️", "🅱️", "🆎", "🆑", "🅾️", "🆘", "❌", "⭕️", "🛑",
                    "⛔️", "📛", "🚫", "💯", "💢", "♨️", "🚷", "🚯", "🚳", "🚱", "🔞", "📵", "🚭", "❗️", "❕", "❓", "❔", "‼️", "⁉️", "🔅",
                    "🔆", "〽️", "⚠️", "🚸", "🔱", "⚜️", "🔰", "♻️", "✅", "🈯️", "💹", "❇️", "✳️", "❎", "🌐", "💠", "Ⓜ️", "🌀",
                    "💤", "🏧", "🚾", "♿️", "🅿️", "🈳", "🈂️", "🛂", "🛃", "🛄", "🛅", "🚹", "🚺", "🚼", "🚻", "🚮", "🎦", "📶", "🈁", "🔣", "ℹ️",
                    "🔤", "🔡", "🔠", "🆖", "🆗", "🆙", "🆒", "🆕", "🆓", "0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣",
                    "🔟", "🔢", "#️⃣", "*️⃣", "⏏️", "▶️", "⏸", "⏯", "⏹", "⏺", "⏭", "⏮", "⏩", "⏪", "⏫", "⏬", "◀️", "🔼", "🔽", "➡️",
                    "⬅️", "⬆️", "⬇️", "↗️", "↘️", "↙️", "↖️", "↕️", "↔️", "↪️", "↩️", "⤴️", "⤵️", "🔀", "🔁",
                    "🔂", "🔄", "🔃", "🎵", "🎶", "➕", "➖", "➗", "✖️", "♾", "💲", "💱", "™️", "©️", "®️", "〰️", "➰", "➿", "🔚", "🔙",
                    "🔛", "🔝", "🔜", "✔️", "☑️", "🔘", "⚪️", "⚫️", "🔴", "🔵", "🔺", "🔻", "🔸", "🔹", "🔶", "🔷", "🔳", "🔲", "▪️", "▫️",
                    "◾️", "◽️", "◼️", "◻️", "⬛️", "⬜️", "🔈", "🔇", "🔉", "🔊", "🔔", "🔕", "📣", "📢", "👁‍🗨", "💬", "💭", "🗯", "♠️",
                    "♣️", "♥️", "♦️", "🃏", "🎴", "🀄️", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝", "🕞",
                    "🕟", "🕠", "🕡", "🕢", "🕣", "🕤", "🕥", "🕦", "🕧"
                ]
            },
            flags: {
                title: 'Flags',
                datas: [
                    "🏳️", "🏴", "🏁", "🚩", "🏳️‍🌈", "🏴‍☠️", "🇦🇫", "🇦🇽", "🇦🇱", "🇩🇿", "🇦🇸", "🇦🇩", "🇦🇴", "🇦🇮", "🇦🇶", "🇦🇬", "🇦🇷", "🇦🇲", "🇦🇼", "🇦🇺",
                    "🇦🇹", "🇦🇿", "🇧🇸", "🇧🇭", "🇧🇩", "🇧🇧", "🇧🇾", "🇧🇪", "🇧🇿", "🇧🇯", "🇧🇲", "🇧🇹", "🇧🇴", "🇧🇦", "🇧🇼", "🇧🇷", "🇮🇴", "🇻🇬", "🇧🇳", "🇧🇬", "🇧🇫", "🇧🇮", "🇰🇭",
                    "🇨🇲", "🇨🇦", "🇮🇨", "🇨🇻", "🇧🇶", "🇰🇾", "🇨🇫", "🇹🇩", "🇨🇱", "🇨🇳", "🇨🇽", "🇨🇨", "🇨🇴", "🇰🇲", "🇨🇬", "🇨🇩", "🇨🇰", "🇨🇷", "🇨🇮", "🇭🇷", "🇨🇺", "🇨🇼", "🇨🇾",
                    "🇨🇿", "🇩🇰", "🇩🇯", "🇩🇲", "🇩🇴", "🇪🇨", "🇪🇬", "🇸🇻", "🇬🇶", "🇪🇷", "🇪🇪", "🇪🇹", "🇪🇺", "🇫🇰", "🇫🇴", "🇫🇯", "🇫🇮", "🇫🇷", "🇬🇫", "🇵🇫", "🇹🇫", "🇬🇦", "🇬🇲",
                    "🇬🇪", "🇩🇪", "🇬🇭", "🇬🇮", "🇬🇷", "🇬🇱", "🇬🇩", "🇬🇵", "🇬🇺", "🇬🇹", "🇬🇬", "🇬🇳", "🇬🇼", "🇬🇾", "🇭🇹", "🇭🇳", "🇭🇰", "🇭🇺", "🇮🇸", "🇮🇳", "🇮🇩", "🇮🇷", "🇮🇶",
                    "🇮🇪", "🇮🇲", "🇮🇱", "🇮🇹", "🇯🇲", "🇯🇵", "🎌", "🇯🇪", "🇯🇴", "🇰🇿", "🇰🇪", "🇰🇮", "🇽🇰", "🇰🇼", "🇰🇬", "🇱🇦", "🇱🇻", "🇱🇧", "🇱🇸", "🇱🇷", "🇱🇾", "🇱🇮", "🇱🇹", "🇱🇺",
                    "🇲🇴", "🇲🇰", "🇲🇬", "🇲🇼", "🇲🇾", "🇲🇻", "🇲🇱", "🇲🇹", "🇲🇭", "🇲🇶", "🇲🇷", "🇲🇺", "🇾🇹", "🇲🇽", "🇫🇲", "🇲🇩", "🇲🇨", "🇲🇳", "🇲🇪", "🇲🇸", "🇲🇦",
                    "🇲🇿", "🇲🇲", "🇳🇦", "🇳🇷", "🇳🇵", "🇳🇱", "🇳🇨", "🇳🇿", "🇳🇮", "🇳🇪", "🇳🇬", "🇳🇺", "🇳🇫", "🇰🇵", "🇲🇵", "🇳🇴", "🇴🇲", "🇵🇰", "🇵🇼", "🇵🇸", "🇵🇦", "🇵🇬",
                    "🇵🇾", "🇵🇪", "🇵🇭", "🇵🇳", "🇵🇱", "🇵🇹", "🇵🇷", "🇶🇦", "🇷🇪", "🇷🇴", "🇷🇺", "🇷🇼", "🇼🇸", "🇸🇲", "🇸🇦", "🇸🇳", "🇷🇸", "🇸🇨", "🇸🇱", "🇸🇬", "🇸🇽", "🇸🇰", "🇸🇮",
                    "🇬🇸", "🇸🇧", "🇸🇴", "🇿🇦", "🇰🇷", "🇸🇸", "🇪🇸", "🇱🇰", "🇧🇱", "🇸🇭", "🇰🇳", "🇱🇨", "🇵🇲", "🇻🇨", "🇸🇩", "🇸🇷", "🇸🇿", "🇸🇪", "🇨🇭", "🇸🇾", "🇹🇼", "🇹🇯", "🇹🇿",
                    "🇹🇭", "🇹🇱", "🇹🇬", "🇹🇰", "🇹🇴", "🇹🇹", "🇹🇳", "🇹🇷", "🇹🇲", "🇹🇨", "🇹🇻", "🇻🇮", "🇺🇬", "🇺🇦", "🇦🇪", "🇬🇧", "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "🏴󠁧󠁢󠁷󠁬󠁳󠁿", "🇺🇳", "🇺🇸", "🇺🇾", "🇺🇿",
                    "🇻🇺", "🇻🇦", "🇻🇪", "🇻🇳", "🇼🇫", "🇪🇭", "🇾🇪", "🇿🇲", "🇿🇼"
                ]
            },
            newEmojis: {
                title: 'New Emojis',
                datas: [
                    "🥱", "🤏", "🦾", "🦿", "🦻", "🧏", "🧏‍♂️", "🧏‍♀️", "🧍", "🧍‍♂️", "🧍‍♀️", "🧎", "🧎‍♂️", "🧎‍♀️", "👨‍🦯",
                    "👩‍🦯", "👨‍🦼", "👩‍🦼", "👨‍🦽", "👩‍🦽", "🦧", "🦮", "🐕‍🦺", "🦥", "🦦", "🦨", "🦩", "🧄", "🧅", "🧇", "🧆", "🧈", "🦪", "🧃",
                    "🧉", "🧊", "🛕", "🦽", "🦼", "🛺", "🪂", "🪐", "🤿", "🪀", "🪁", "🦺", "🥻", "🩱", "🩲", "🩳", "🩰", "🪕", "🪔", "🪓", "🦯",
                    "🩸", "🩹", "🩺", "🪑", "🪒", "🤎", "🤍", "🟠", "🟡", "🟢", "🟣", "🟤", "🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "🟫"
                ]
            }
        };
    }


    render() {
        const {emojiList} = this;
        return (
            <div className="emojiList">
                {
                    Object.keys(this.emojiList).map((key, ki) => (
                        <div key={ki}>
                            <div className="emojiTitle">{this.emojiList[key].title}</div>
                            {
                                this.emojiList[key].datas.map((v, i) => (
                                    <div key={i} data-num={i} data-title={this.emojiList[key].title} className="emoji"
                                         onClick={this.props.addEmoji}>{v}</div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        );
    };
};
-- 데이터베이스: `b_board`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `b_users`
--

CREATE TABLE `b_users` (
  `id` int(11) NOT NULL,
  `user` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `pwd` varchar(256) NOT NULL,
  `created` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 테이블의 덤프 데이터 `b_users`
--

INSERT INTO `b_users` (`id`, `user`, `name`, `pwd`, `created`) VALUES
(1, 'admin', '1234', '*A4B6157319038724E3560894F7F932C8886EBFCF', '0000-00-00');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `b_users`
--
ALTER TABLE `b_users`
  ADD PRIMARY KEY (`id`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `b_users`
--
ALTER TABLE `b_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;
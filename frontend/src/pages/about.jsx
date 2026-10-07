import './about.css';
import thichsong from './thichsong.png';
import khonggucnga from './khonggucnga.png';
function About() {
    return(
        <>
        <h1 className="about-title">Giới thiệu về học bổng Thích sống</h1>
        <div className="Gioithieu">
            <div className="Gioithieutext">
            <p>
                Học bổng “Thích Sống” ra đời vào tháng 5 năm 2025, sau khi nhà văn Nguyễn Bích Lan xuất bản phần hai tự truyện về cuộc đời mình, với mục đích hỗ trợ và khích lệ các học sinh và sinh viên có hoàn cảnh đặc biệt khó khăn, theo đuổi giáo dục.
                Với nguồn tài chính chủ yếu từ việc phát hành sách “Thích Sống”, cho đến tháng 9 năm 2026, 25 suất học bổng Thích Sống đã được trao cho 21 học sinh và sinh viên từ các tỉnh thành khác nhau như Yên Bái, Thái Bình, Bà Rịa-Vũng Tàu, tp Hồ Chí Minh, Bình Định, Huế…
                Các học sinh, sinh viên nhận học bổng Thích Sống không chỉ được hỗ trợ một phần tài chính cho việc học mà còn được tặng các cuốn sách bổ ích hoặc được tham gia các khoá học tiếng Anh miễn phí. 
                Hiện nay học bổng Thích Sống được điều hành bởi Nguyễn Minh Hoàng, cháu trai của nhà văn Nguyễn Bích Lan. 
 
            </p>
            </div>
             <div className="gioithieupicture">
            <img src={khonggucnga} alt="" className="picture"></img>
            <img src={thichsong} alt="" className="picture"></img>
            </div>
        </div>
        <h2 className="about-subtitle">Danh sách sinh viên nhận học bổng</h2>
        <details className="native-box">
        <summary className="native-title">Năm 2025 (10 bạn học sinh có hoàn cảnh khó khăn có thành tích xuất sắc tại trường Nam Duyên Hà)</summary>
        <div className="native-content">
        <ul>
           <li>Lê Đức Tiến - Trường THPT Nam Duyên Hà, huyện Hưng Hà, Thái Bình<br></br></li>
           <li>Nguyễn Đỗ Minh Anh - Trường THPT Nam Duyên Hà, huyện Hưng Hà, Thái Bình<br></br></li>
           <li>Trần Mạnh Hùng - Trường THPT Nam Duyên Hà, huyện Hưng Hà, Thái Bình<br></br></li>
           <li>Nguyễn Thị Mai Anh - Trường THPT Nam Duyên Hà, huyện Hưng Hà, Thái Bình<br></br></li>
           <li>Đỗ Phương Thảo - Trường THPT Nam Duyên Hà, huyện Hưng Hà, Thái Bình<br></br></li>
           <li>Vũ Thị Phương - Trường THPT Nam Duyên Hà, huyện Hưng Hà, Thái Bình<br></br></li>
           <li>Trần Tiến Dũng - Trường THPT Nam Duyên Hà, huyện Hưng Hà, Thái Bình<br></br></li>
           <li>Phạm Đức Trung - Trường THPT Nam Duyên Hà, huyện Hưng Hà, Thái Bình<br></br></li>
           <li>Trần Hữu Trường - Trường THPT Nam Duyên Hà, huyện Hưng Hà, Thái Bình<br></br></li>
           <li>Phạm Kiều Trang - Trường THPT Nam Duyên Hà, huyện Hưng Hà, Thái Bình<br></br></li>
        </ul>
        </div>
        </details>
        <details className="native-box">
        <summary className="native-title">Năm 2026</summary>
        <div className="native-content">
        <ul>
              <li>Phạm Thảo Nguyên - ĐH Quy Nhơn </li>
              <li> Hồ Thị Hoà - Trường ĐH Văn hoá, Hà Nội </li>
              <li> Lô Thị Ngọc Anh - Trường THPT Dân tộc Nội trú tỉnh Nghệ An </li>
              <li>Ngô Đặng Minh Huy - ĐH Khoa học, thuộc ĐH Huế </li>
              <li>Nguyễn Tùng Dương - ĐH Kiến Trúc Hà Nội</li>
              <li>Huỳnh Thị Như Quỳnh - Trung tâm Giáo dục thường xuyên quận 6</li>
              <li>Trần Thị Hoàng Ân - Đại học Y dược tp HCM </li>
              <li>Khúc Tiến Dũng - ĐH Khoa học Tự nhiên Hà Nội </li>
              <li>Nguyễn Tiến Anh - ĐH Giao thông Vận tải </li>
              <li>Trần Thị Thanh Tú - ĐH Y Hà Nội </li>
              <li>Tống Thị Huế - ĐH Kinh tế Quốc dân </li>
              <li>Phạm Đức Nghĩa - ĐH Sư phạm Huế </li>
              <li>Đoàn Thanh Quốc</li>
        </ul>
        </div>
        </details>
        </>
    );
}
export default About;
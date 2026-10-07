import { useState } from 'react';
import { Link } from 'react-router-dom';
import bannerImg from './luffy-banner.png';
import './home.css';

const slides = [
  { img: bannerImg, text: '' },
  { img: bannerImg, text: '' },
  { img: bannerImg, text: '' },
  { img: bannerImg, text: '' },
];

function Home() {
  const [cur, setCur] = useState(0);

  return (
    <>
  <section className="hero">
        <h1>“ Theo đuổi giáo dục là cách đáng lựa chọn nhất để thoát khỏi nghịch cảnh.”</h1>
        <p>Trích: Nguyễn Bích Lan, tác giả & dịch giả của 72 cuốn sách</p>
      </section>
    <div className="hm">
      <div className="sl-box">
        <div className="sl fade" key={cur}>
          <div className="num">{cur + 1} / {slides.length}</div>
          <img src={slides[cur].img} alt="" />
          <div className="cap">{slides[cur].text}</div>
        </div>
        <a className="prev" onClick={() => setCur((cur - 1 + slides.length) % slides.length)}>&#10094;</a>
        <a className="next" onClick={() => setCur((cur + 1) % slides.length)}>&#10095;</a>
      </div>
      <div className="dots">
        {slides.map((_, i) => (
          <span key={i} className={i === cur ? 'dot act' : 'dot'} onClick={() => setCur(i)}></span>
        ))}
      </div>
      <section className="hero">
        <div className="hero-btns">
          <Link to="/about" className="btn">Tìm hiểu về học bổng &rarr;</Link>
          <Link to="/viewcomments" className="btn btn2">Đọc cảm nhận sinh viên</Link>
        </div>
      </section>

      <section className="stats">
        <div className="st">
          <b>--</b>
          <span>Sinh viên đã đồng hành</span>
        </div>
        <div className="st">
          <b>--</b>
          <span>Tổng học bổng đã trao</span>
        </div>
        <div className="st">
          <b>--</b>
          <span>Năm hoạt động</span>
        </div>
      </section>

      <section className="how">
        <div className="how-txt">
          <h2>Một vài câu chuyện truyền cảm hứng</h2>
          <p>
            Lorem ípsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="how-list">
          <div className="card">
            <h3>Câu chuyện 1</h3>
            <p>
              Như Quỳnh thiếu cả cha lẫn mẹ. Tuổi thơ của Quỳnh là những ngày theo bà ngoại đi bán vé số
               và bới rác để kiếm sống qua ngày. Em viết:<br></br>
               
            </p>
            <Link to="/story"  className="substory"><i>... Xem thêm</i> </Link>
          </div>
          <div className="card">
            <h3>Câu chuyện 2</h3>
            <p>
              Thảo Nguyên là sinh viên đầu tiên của năm 2026 được trao học bổng Thích Sống. Sinh ra ở huyện
               An Nhơn, tỉnh Bình Định, bất chấp khuyết tật nặng nề, Nguyên vẫn theo đuổi giáo dục.<br></br>
               <Link to="/story"  className="substory"><i>... Xem thêm</i> </Link>
            </p>
          </div>
          <div className="card">
            <h3>Câu chuyện 3</h3>
            <p>
              Nguyễn Tùng Dương sinh ra ở huyện miền núi Văn Yên, tỉnh Yên Bái. Mồ côi cha từ nhỏ, Dương vừa đi 
              học vừa giúp mẹ chăm anh trai bị bại não, bởi thế dù trường cấp III cách nhà gần 20km Dương vẫn đi
               về hàng ngày. <br></br>
               <Link to="/story"  className="substory"><i>... Xem thêm</i> </Link> 
            </p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="sec-head">
          <div>
            <h2>Các bạn nói gì</h2>
            <p>Đăng với sự đồng ý của từng bạn.</p>
          </div>
          <Link to="/viewcomments" className="more">Xem tất cả &rarr;</Link>
        </div>
      </section>
      <section className="cta">
        <h2>Bạn đang nhận học bổng?</h2>
        <p>
          Đăng nhập để tham gia vào cộng đồng sinh viên của quỹ, để lại góp ý và chia sẻ câu chuyện của 
          bạn với các sinh viên khác.
        </p>
        <Link to="/login" className="btn btn2">Đăng nhập &rarr;</Link>
      </section>
    </div>
    </>
  );
}

export default Home;

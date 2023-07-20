import JustValidate from 'just-validate';
const validator = new JustValidate('#basic_form');

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

function onSubmit(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  console.log(formData.get("user"));
  console.log(formData.get("mail"));
  console.log(formData.get("password"));
  console.log(formData.get("age"));
  console.log(formData.get("adress"));
}

validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: '3文字以上で入力してください。',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: '最大入力文字数は15文字です。',
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'email',
      errorMessage: '形式が正しくありません。',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'password',
      errorMessage: 'パスワードは8文字以上で入力してください。その際に数字を1文字以上含める必要があります。'
    }
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'number',
      errorMessage: '数値で入力してください。',
    },
    {
      rule: 'minNumber',
      value: 18,
      errorMessage: '18以上の数字を入力してください。',
    },
    {
      rule: 'maxNumber',
      value: 150,
      errorMessage: '150以下の数字を入力してください。',
    },
  ])
  .addField('#basic_address', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
  ])
  .onSuccess(onSubmit);


  const titleList = [
    "セキュリティキー",
    "パンクするサーバ",
    "404エラー",
    "ファイアウォール"
  ]

  function updateSlideTitle(thi,index,text) {
    // if(index == 0){
    //   text.textContent = titleList[index];
    //   console.log(index);
    // }
    // text.textContent = titleList[index];

    const activeSlideIndex = thi.realIndex;

    if (text) {
      text.textContent = titleList[index];
      if(index == 0){
        // let slideNumber = (index % 4) + 1;
        let slideNumber = activeSlideIndex;
        let sentence = "スライド" + slideNumber + "を表示しています。"
        text.textContent = sentence;
      }else{
        text.textContent = titleList[activeSlideIndex];
      }
    }
    

    // const slideText1 = `スライド${slideIndex}を表示しています。`;
    // const slideText2 = titleList[slideIndex]
    // swiperParents.forEach((item) => {
    //   console.log(item);
    // });

    // const itemsArray = Array.from(swiperParents);
    // console.log(itemsArray);
    // console.log(swiperTitle,slideText1,slideText2,swiperContainer,swiperParent,swiperParents)
    // swiperTitle.textContent = slideText1;
  }


  // const swiperParent = new Swiper ('.swiper-parent', {
  const swiperParents = document.querySelectorAll('.swiper-parent');

  swiperParents.forEach((swiperParent) => {
    const swiperContainer = swiperParent.querySelector('.swiper-container');
    // const swiperTitle = swiperParent.querySelector('.swiper-title');
    // const swiperTitle = swiperParent.querySelectorAll(".swiper-title");

    const mySwiper = new Swiper(swiperContainer, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 300,
      centeredSlides: true,

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },
      on: {
        init: function () {
          // const activeSlideIndex = this.realIndex;
          // updateSlideTitle(activeSlideIndex);
          updateSlideTitle(this);
        },
        slideChange: function (event) {
          // console.log(swiperParents);
          const index = Array.from(swiperParents).indexOf(event.el.parentElement);
          const text = event.el.parentElement.getElementsByClassName("swiper-title")[0];
          // const text = event.el.parentElement.querySelector(".swiper-title");
          // text.textContent = index;
          // console.log(text, index);

          updateSlideTitle(this,index,text);

          // if (index == 0){
          //   let sentence = "スライド" + str(index) + "を表示しています。";
          //   text.textContent = sentence;
          // }

          // const activeSlideIndex = this.realIndex;
          // updateSlideTitle(activeSlideIndex);
        },
      },
    });
  });
    

  //   const swiper1 = new Swiper('.swiper-container:nth-child(1)', {
  //     // Swiper1の設定オプション
  //     // ...
  //   });
    
  //   const swiper2 = new Swiper('.swiper-container:nth-child(2)', {
  //     // Swiper2の設定オプション
  //     // ...
  //   });

  // swiper1.on('slideChange', function () {
  //   let swiperTitle1 = document.getElementById("swiper-title1");
  //   let slideText = "スライド" + swiper1.realIndex + "を表示しています。"
  //   swiperTitle1.textContent = slideText;
  // });
  // swiper2.on('slideChange', function () {
  //   let swiperTitle2 = document.getElementById("swiper-title2");
  //   let slideText = "スライド" + swiper2.realIndex + "を表示しています。"
  //   swiperTitle2.textContent = slideText;
  // });
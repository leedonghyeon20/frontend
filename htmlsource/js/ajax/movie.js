// 년, 월, 일 가져오기
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

const init = () => {
  const today = new Date();
  console.log(today);
  // 어제 날짜 구하기
  // 년 월 일 분리 => 요소 안에 보여주기
  const year = today.getFullYear();
  const mon = today.getMonth() + 1;
  const day = today.getDate() - 1;

  txtYear.value = year;
  selMon.value = mon < 10 ? "0" + mon : mon;
  selDay.value = day < 10 ? "0" + day : day;
};

init();

document.querySelector("button").addEventListener("click", () => {
  // 사용자가 입력한 년,월,일 가져오기
  const targetDt = txtYear.value + selMon.value + selDay.value;

  const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=935401d2f6d1054a2abbe73e0b50dda7&targetDt=${targetDt}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.boxOfficeResult);
      console.log(data.boxOfficeResult.dailyBoxOfficeList);

      const boxList = data.boxOfficeResult.dailyBoxOfficeList;

      let result = ``;

      boxList.forEach((movie) => {
        // 순위     영화명
        // 1(▲ 1)   승부
        // rank, rankInten, movieNm

        result += `${movie.rank} 위`;

        const rankInten = parseInt(movie.rankInten);

        if (rankInten > 0) {
          result += "(▲ ";
        } else if (rankInten < 0) {
          result += "(▼ ";
        } else {
          result += "( ";
        }
        result += `${movie.rankInten})`;

        result += ` <a href='#' onclick='javascript:movieInfo(${movie.movieCd})'>${movie.movieNm}</a>`;
        result += `<br>`;

        document.querySelector("#rank").innerHTML = result;
      });
    });
});

// 영화 상세정보
const movieInfo = (movieCd) => {
  console.log(movieCd);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=935401d2f6d1054a2abbe73e0b50dda7&movieCd=${movieCd}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.movieInfoResult.movieInfo);
      // 영화제목
      // 영어제목
      // 상영시간
      // 감독
      // 배우
      // movieNm, movieNmEn, showTm, directors.peopleNm, actors.peopleNm

      const movieData = data.movieInfoResult.movieInfo;

      let result = `<ul>영화 상세정보</ul>`;

      result += `<li>영화제목 : ${movieData.movieNm}</li>`;
      result += `<li>영어제목 : ${movieData.movieNmEn}</li>`;
      result += `<li>상영시간 : ${movieData.showTm} 분</li>`;
      console.log(result);

      //   console.log(movieData.actors.peopleNm[0]);
      let directorNm = "";
      movieData.directors.forEach((movie) => {
        console.log(movie.peopleNm);
        directorNm += movie.peopleNm + " ";
      });
      result += `<li>감독 : ${directorNm}</li>`;

      let actorNm = "";
      movieData.actors.forEach((movie) => {
        actorNm += movie.peopleNm + ", ";
      });
      result += `<li>배우 : ${actorNm}</li>`;
      // result += `${movieData.directors.p}`;

      document.querySelector("#info").innerHTML = result;
    });
};

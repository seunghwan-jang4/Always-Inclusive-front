(function () {
  /**
   * 환경 구분:
   * 1 => 개발 (Development)
   * 2 => 배포 (Production)
   */
  const environment = 1;  // 필요한 경우 1 또는 2로 수정

  let config = {};

  if (environment === 1) {
    // 개발 환경
    config = {
      isDevelopment: true, // 개발용 플래그
      BASE_API_URL: 'http://127.0.0.1:8000',    // DRF 등 로컬 API 서버
      BASE_FRONT_URL: 'http://127.0.0.1:5500/src',  // 로컬 페이지 URL
    };
  } else if (environment === 2) {
    // 배포 환경
    config = {
      isDevelopment: false,
      BASE_API_URL: '',            // 실제 배포 API 주소
      BASE_FRONT_URL: '', // 실제 운영 도메인
    };
  }

  // 전역 객체(window)에 config 객체를 할당
  window.config = config;
})();
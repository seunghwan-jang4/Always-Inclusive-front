# Always-Inclusive-front

# OTT 성향에 맞는 드라마/애니/영화 추천 AI 챗봇

## 📌 프로젝트 소개

<details>
<summary>프로젝트 개요 및 일정</summary>

### 프로젝트 개요

각 OTT가 제공하는 콘텐츠(영화/드라마/애니메이션)를 분석 및 분류하여, 분위기가 비슷한 것들끼리 묶어서 새로운 카테고리를 생성합니다. 그리고 사용자에게 카테고리를 선택하게 하여, 적절한 추천 목록을 제공하는 추천 시스템입니다.

### 개발 환경 및 사용 예정 기술
- **IDE**: Visual Studio Code
- **OS**: Windows
- **가상 환경**: myvenv
- **버전 관리**: Git

### 개발 일정
- **12월 30일 ~ 1월 3일**: 역할 분담 및 아이디어 정리, SA문서, README 작성, 와이어프레임 작성
- **1월 6일 ~ 1월 10일**: 개발 툴 확정 및 세팅, MVP 개발 시작
- **1월 7일 ~ 1월 9일**: 로고 및 배경 제작(수정), MVP 기능 개발
- **1월 10**: 크롤링 시작, 세부 기능 개발, LangChain 마무리, Django 개발 시작 준비 단계
- **1월 13 ~ 1월 15**: 크롤링 마무리, 와이어 프레임 기준 프론트 및 백엔드 세부 기능 구현 및 수정.
- 이후 일정은 추가 예정
  
</details>

<details>
<summary>폴더 구조</summary>
   
### 폴더 구조 

```bash
OTTRecommendationSystem/   # (1) repository_root
├─ .gitignore
├─ README.md
├─ requirements.txt
├─ venv/                    # 가상 환경
├─ my_project/              # (2) project_root
│  ├─ apps/
│  │  └─ myapp/
│  │     ├─ models/
│  │     │  ├─ __init__.py
│  │     │  ├─ profile.py
│  │     │  └─ instagram.py
│  │     ├─ views/
│  │     ├─ forms/
│  │     ├─ admin.py
│  │     ├─ models.py
│  │     └─ tests.py
│  ├─ config/                # (3) configuration_root
│  │  ├─ settings/
│  │  │  ├─ __init__.py
│  │  │  ├─ base.py
│  │  │  ├─ dev.py
│  │  │  └─ prod.py
│  │  ├─ asgi.py
│  │  ├─ urls.py
│  │  └─ wsgi.py
│  ├─ static/
│  │  └─ assets/             # 정적 파일
│  ├─ media/
│  │  └─ uploads/            # 업로드 파일
│  ├─ templates/
│  │  └─ myapp/
│  └─ manage.py
```

</details>

---

## 🌟 프로젝트 선정 이유


<details>
<summary>내용 보기</summary>

요즘은 각 OTT마다 방대한 양의 미디어 콘텐츠가 제공되고 있어, 사용자가 원하는 콘텐츠를 선택하는 데 많은 시간이 소요됩니다.  
특히, 플랫폼마다 추천 알고리즘의 편차가 커 사용자가 자신의 취향에 딱 맞는 콘텐츠를 찾기 어려운 상황입니다.  

이 프로젝트는 이러한 문제를 해결하기 위해 시작되었습니다.  
OTT에서 제공하는 콘텐츠를 분석 및 분류하여 **사용자 맞춤형 추천 시스템**을 개발함으로써, 번거로움 없이 바로 콘텐츠에 몰입할 수 있는 환경을 제공하고자 합니다.  
이를 통해 사용자는 **플랫폼의 경계를 넘어선 통합 추천 경험**을 얻을 수 있으며, **콘텐츠 소비의 효율성** 또한 크게 향상될 것으로 기대됩니다.


</details>

---

## 📁 프로젝트 구조

<details>
<summary>내용 보기</summary>

![프로젝트구조(12조)_2](https://github.com/user-attachments/assets/0555f520-f07c-4bb7-8327-26f54e4eee52)


</details>

---

## 🎮 주요 기능

<details>
<summary>내용 보기</summary>

1. **콘텐츠 분석 및 분류**
   - 영화, 드라마, 애니메이션 등 다양한 OTT 콘텐츠의 분위기를 자동으로 분석.
   - 분석된 콘텐츠를 새로운 카테고리로 묶어 사용자에게 제공.

2. **추천 시스템**
   - 사용자가 선호하는 카테고리를 선택하면 관련 콘텐츠 추천.
   - 유사 콘텐츠 추천 알고리즘 적용.

3. **사용자 인터페이스**
   - 직관적인 UI로 카테고리 선택 및 추천 결과 확인 가능.
   - 검색 필터 기능으로 세부적인 콘텐츠 검색 지원.

4. **데이터 관리**
   - MariaDB를 사용해 콘텐츠 데이터를 안전하고 효율적으로 저장.
   - Django Admin을 통해 데이터 관리 및 검토 가능.

</details>

---

## 🛠 기술 스택

<details>
<summary>내용 보기</summary>

- **Backend**: Django REST Framework, Python 3.10
- **Database**: MariaDB
- **Frontend**: Uizard, Figma 

</details>

---

## 🛠 기술적 의사결정

<details>
<summary>내용 보기</summary>

## 1. **Django**

**비교군**: FastAPI, Flask

**선택 이유**:

- Django는 "**배터리 포함 프레임워크**"로, 인증, 관리자 페이지, ORM, URL 라우팅 등 웹 애플리케이션 제작에 필요한 기능들을 기본적으로 제공합니다. 이는 프로젝트 초기 개발 속도를 높이고 구조를 체계적으로 설계할 수 있게 합니다.
- OTT 사이트별 카테고리 분류 및 추천 시스템은 데이터 모델링과 데이터베이스 관리가 핵심인데, Django ORM은 이를 효과적으로 지원합니다.
- FastAPI와 Flask는 더 가볍고 유연하지만, Django는 대규모 프로젝트에 적합하며 커뮤니티와 문서화도 훨씬 풍부합니다.

---

## 2. **LangChain**

**비교군**: LlamaIndex

**선택 이유**:

- LangChain은 **RAG (Retrieval-Augmented Generation)** 기술에서 대화형 AI의 컨텍스트를 확장하는 데 최적화되어 있습니다.
- LlamaIndex는 데이터 인덱싱 및 검색에 특화되어 있으나, LangChain은 다양한 AI 모델과 API 간의 연동, 대화 흐름 관리 기능 등 더 폭넓은 기능을 제공합니다.
- 본 프로젝트에서 OpenAI API와의 통합을 고려할 때, LangChain의 높은 확장성과 편리한 인터페이스가 강점입니다.

---

## 3. **Uizard, Figma 혼합 활용**

**비교군**: **Uizard, Figma**

**선택 이유**:

이번 프로젝트에서는 초기 설계 속도와 최종 디자인의 품질을 모두 충족시키기 위해 **Uizard와 Figma를 혼합 사용**하기로 결정했습니다.

- **초기 단계**: Uizard를 활용하여 UI 프로토타입을 빠르게 제작하고, 팀원 간 피드백을 반영합니다.
- **후속 단계**: Figma를 통해 세부적인 UI/UX 설계를 진행하며, 협업과 플러그인 기능을 활용해 완성도 높은 결과물을 제작합니다. 이를 통해 프로젝트 진행 속도를 높이고, 동시에 디자인의 정교함을 유지할 수 있습니다.

---

## 4. **MariaDB**

**비교군**: PostgreSQL

**선택 이유**:

- MariaDB는 MySQL 기반으로 시작되어 기존 MySQL 경험을 가진 팀원들이 더 쉽게 활용할 수 있습니다.
- PostgreSQL이 JSON 데이터 처리와 확장성 면에서 우수하나, MariaDB는 **성능이 가벼우며 복잡하지 않은 데이터 처리**에 적합합니다.
- 프로젝트 데이터가 OTT 카테고리와 추천 시스템 중심으로 상대적으로 간단하게 설계되므로 MariaDB가 적절합니다.

---

## 5. **OpenAI**

**비교군**: Gemini, Claude

**선택 이유**:

- OpenAI의 GPT 모델은 대화형 AI 구현에서 가장 성능이 입증된 모델 중 하나입니다.
- Gemini와 Claude는 특정 도메인에서 유리한 면이 있으나, OpenAI는 **광범위한 언어 모델 성능**과 사용성, 풍부한 API 지원이 프로젝트 요구사항과 잘 맞습니다.
- 특히, 다국어 지원과 정교한 추천 대화 흐름 설계가 가능하다는 점이 강점입니다.

---

## 6. **AWS**

**비교군**: Google Cloud, Azure

**선택 이유**:

- AWS는 클라우드 서비스 중 가장 **광범위한 서비스 포트폴리오와 유연성**을 제공합니다.
- Google Cloud는 데이터 분석 도구에서 강점이 있지만, AWS는 **AI/ML 서비스, 스토리지, 서버리스 기능** 등 다양한 요구사항을 충족할 수 있습니다.
- Azure는 Microsoft 생태계와의 통합이 장점이지만, AWS의 높은 시장 점유율과 풍부한 레퍼런스가 선택의 이유입니다.

</details>

---

## 💻 설치 및 실행 방법

<details>
<summary>내용 보기</summary>

### 1. **환경 설정**
1. 저장소를 클론합니다.
   ```bash
   git clone https://github.com/your-repository-url.git
   cd your-repository-name

2. 가상 환경을 생성하고 활성화합니다.

```bash
python -m venv myvenv
source myvenv/bin/activate  # macOS/Linux
myvenv\Scripts\activate
```
3. 필수 패키지를 설치합니다.

```bash
pip install -r requirements.txt
```


### 2. **데이터 베이스 설정**

1. settings.py에서 데이터베이스 정보를 수정합니다.
```python
DATABASES ={
}
```
2. 마이그레이션을 실행합니다.

```bash
python manage.py makemigrations
python manage.py migrate
```


### **3. 서버 실행**

1. 개발 서버를 실행합니다.
```bash
python manage.py runserver
```

</details>

---

## 🔍 트러블슈팅
<details>
<summary>해결된 이슈 목록</summary>

| 문제 발생일   | 이슈 내용   | 해결 방안 | 담당자 |
|--------------|-------------|-----------|-------|
|2025년 1월 13일|html 파일에 css파일의 스타일 미적용 문제|css 파일 경로 설정|장승환|
|2025년 1월 14일|Footer 화면 하단 고정 및 적용|           |장승환|
|2025년 1월 13일|데이터크롤링 상세페이지 접속 코드| |이명혜|
|2025년 1월 13일|셀레니움을 활용한 데이터 크롤링|           |김건태|
|              |             |           |       |
|              |             |           |       |
|              |             |           |       |
|              |             |           |       |
|              |             |           |       |
|              |             |           |       |
|              |             |           |       |
|              |             |           |       |
|              |             |           |       |
|              |             |           |       |
|              |             |           |       |


</details>


## 결과

<details>
<summary>내용 보기</summary>

(공란)

</details>


  
### 역할 분담
<details>
<summary>역할 분담</summary>

| 이름     | 역할       | 업무                                       |
|----------|------------|--------------------------------------------|
| 장승환   | 프론트엔드 | 프로젝트 일정 관리 및 문서화 작업, UI 설계 및 구현 |
| 김건태   | 크롤링     | 데이터 크롤링                             |
| 박수호B  | 백엔드 및 데이터 엔지니어 | LangChain 활용 데이터 처리 및 RAG 시스템 구현 |
| 이명혜   | 크롤링     | 데이터 크롤링                             |

</details>



### ERD

<details>
<summary>ERD</summary>

<details>
<summary>ERD 1.0 </summary>
<img src = https://github.com/user-attachments/assets/0fffd09e-036f-426a-ac29-901c0dbfdca1>
</details>

<details>
<summary>ERD 1.1 </summary>
<image (1) src = https://github.com/user-attachments/assets/b3abd6a2-bf37-4c42-89c8-3842f104225f>
</details>

<details>
<summary>ERD 1.11 </summary>
<image (2) src = https://github.com/user-attachments/assets/6ad73f79-c7a4-4ce6-9bff-8bda5e604938>
</details>

<details>
<summary>ERD 1.2 </summary>
<image src = https://github.com/user-attachments/assets/8d41b55d-07e2-4182-bf5d-dafb6ff5e124>
</details>

</details>

### 레퍼런스 
<details>
<summary>레퍼런스 출처</summary>
- https://teamsparta.notion.site/SA-97b05811e819459db6bfd1cd79ae6c1a
- [TVING](https://www.tving.com/onboarding)
- https://www.netflix.com/kr/
- https://watcha.com/browse/video
- [https://teamsparta.notion.site/SA-97b05811e819459db6bfd1cd79ae6c1a](https://www.notion.so/SA-97b05811e819459db6bfd1cd79ae6c1a?pvs=21)
- [https://velog.io/@anjaekk/python절대경로상대경로-상대경로-import-에러이유와-해결](https://velog.io/@anjaekk/python%EC%A0%88%EB%8C%80%EA%B2%BD%EB%A1%9C%EC%83%81%EB%8C%80%EA%B2%BD%EB%A1%9C-%EC%83%81%EB%8C%80%EA%B2%BD%EB%A1%9C-import-%EC%97%90%EB%9F%AC%EC%9D%B4%EC%9C%A0%EC%99%80-%ED%95%B4%EA%B2%B0)

</details>


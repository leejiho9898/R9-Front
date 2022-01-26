 # 알구 - 시니어 알바 서비스
> 코로나바이러스감염증-19(COVID-19)가 전 세계를 강타하면서 삶의 많은 부분이 변했습니다  
> 이에 자가격리와 거리두기등의 영향으로 "코로나 우울증" (Corona Blue)이 만연해 있습니다.  
> 저희는 이 상황에 조금이라도 도움이 되고자 인간의 기본 5대 욕구중 하나인 자아실현의 욕구를 충족시켜줄 수 있는 일자리 제공 플렛폼을 만들게 되었고 그중에서도 50대 이상 중장년층의 소일거리가 필요하다고 생각했습니다.  
> 알구 (알바 구해요)는 중장년층에 특화된 시니어 아르바이트 플랫폼입니다.



### **1\. 프로젝트 배경**

-   기존 아르바이트 플랫폼의 문제점

<img src="https://user-images.githubusercontent.com/84016039/151136711-bb4635ab-b57c-4dff-8b69-3552402809fd.JPG" width="325" height="240"/>


기존 아르바이트 플랫폼들은 기능이 매우 많고, 선택권이 많아 UI적으로 복잡하여 중장년층이 쓰기에는 불편할수 있습니다. 그리하여 저희는 UI적으로 간단하고 중요한 기능을 중심으로 개발하였습니다.

알바를 구할때 가장 중요한 기능은 원하는 알바를 찾는 기능입니다.

저희는 이 기능을 Hashtag 기능으로 차별화 하여 서비스를 개발했습니다. 

-   중장년층의 아르바이트의 필요성

![카드뉴스](https://user-images.githubusercontent.com/84016039/151136170-08ab28cf-0aaa-4614-9360-f4ceee1aca11.JPG)

고령화로 인해 50대 이상도

충분히 노동을 할 수 있지만 , 중장년들을 위한 아르바이트 자리가 부족한 상황입니다. 

타겟층을 좁혀 중장년을 고용하길 바라는 고용주와 알바를 찾는 중장년층 모두 만족할 사이트를 만들면 좋을거 같다고 생각했습니다.

### **2\. 프로젝트 설계**

-   **벤치마킹, 기능설계**

개발을 시작하기전

비슷한 서비스들을 벤치마킹 하였습니다.

참고한 서비스로는 잡코리아 시니어, 알바천국 중장년, 알바몬 장년 채용관입니다.

<img src="https://user-images.githubusercontent.com/84016039/151137061-96b239ee-2911-473e-8f0e-b49fbe12ea3d.JPG" width="487" height="272"/>

기능의 필요성을 A, B, C로 나누어 봤는데요 기준은 다음과 같습니다.

A : 사이트에 없어선 안될 기능

B : 필요하지만 없어도 괜찮은 기능

C : 있으면 좋은 기능 

대부분의 사이트들이 A기능은 갖추었고 B,C는 선택적으로 가져갔습니다.

저희는 Hashtag를 이용한 유연한 분류체계를 이용하기 때문에 관리자가 설정만 해준다면 어떠한 카테고리별 일자리 분류도 가능합니다.

-   **와이어 프레임**

**(추후 추가)**

### **3\. DB & API**

**(추후 추가)**

### **4\. 기술 스택**

#### **Front -end**

-   Typescript
-   Next Js
-   React
-   Material-UI
-   Redux-Toolkit 

#### **Back -end**

-   Typescript
-   Nest Js
-   PostgreSQL
-   Type orm

### **5\. 프로젝트 시연**

#### **LandingPage**

![LandingPage](https://user-images.githubusercontent.com/84016039/151136247-f303fd47-9571-4fc9-a994-49e73c7f38aa.JPG)


-   신규 일자리와 맞춤 일자리 목록 (맞춤일자리는 로그인을 해야합니다)

---

#### ****Register, LoginPage****

![register](https://user-images.githubusercontent.com/84016039/151136295-0dab72ca-b060-4a38-b047-4c0f5a00511d.JPG)
![login](https://user-images.githubusercontent.com/84016039/151136300-8b4e1df4-79bf-4431-b563-f0c3d14aec3f.JPG)
-   기업 회원, 일반 회원을 분리해여 각각 다른 ui 제공

#### ****MyInfoPage****


![myinfo](https://user-images.githubusercontent.com/84016039/151136349-d4e57ac6-7588-4659-9821-8d472dca58dc.JPG)

-   개인정보, 비밀번호, 계정정보, 프로필 이미지, 핵심키워드(Hasgtag) 변경 기능

---

#### **SearchPage**
![searchPage](https://user-images.githubusercontent.com/84016039/151136389-7141021e-00c5-462e-8c0f-36b8ed59bc6d.JPG)
![searchPage2](https://user-images.githubusercontent.com/84016039/151136395-e5fb0d4b-d7a9-4dda-b0cc-71f914f3ceb5.JPG)
![searPage3](https://user-images.githubusercontent.com/84016039/151136401-362511b1-59f5-429e-9bc1-b6aafdad1527.JPG)


-   주소, 급여형태, 근무형태, 기간과 핵심키워드를 이용한 필터링 기능
-   사이트 성능을 위해 pagenation 적용

---

#### **JobPage**

![jobDetail](https://user-images.githubusercontent.com/84016039/151136536-feeeefa3-cc8d-4e04-bb06-96a7b07bc102.JPG)

-   공고의 디테일한 내용
-   후기와 연동하여 하단에 carousel 형태로 제공

#### **JobPostPage  **(Bissness Member 전용)****

![jobPost](https://user-images.githubusercontent.com/84016039/151136537-0b36ffb5-9515-4724-9ba4-5fad4de04557.JPG)

-   공고 등록 기능 

#### **JobHistoryPage  **(Bissness Member 전용)****

![myJob](https://user-images.githubusercontent.com/84016039/151136541-89bc831f-d33a-4a3d-b2a2-a04fc6b6b743.JPG)

-   내가 작성한 공고 목록 호출
-   지원자 목록을 볼수있는 버튼
-   모집완료 버튼을 누르면 개제상태가 모집 완료로 수정됨

---

#### **ReviewPage**

![review](https://user-images.githubusercontent.com/84016039/151136543-03e7007e-3dba-43cd-877f-06378971a46f.JPG)
![review2](https://user-images.githubusercontent.com/84016039/151136545-c35e5def-d0bd-4d9f-94d2-86400d507d60.JPG)

-   사이트에 등록된 기업 목록
-   해당 기업에 작성된 후기 목록

#### **ReviewPostPage**

![review3](https://user-images.githubusercontent.com/84016039/151136549-8d079ca2-783a-4382-b640-f9c607e93884.JPG)

-   후기 등록기능
-   근무 기간을 설정해 후기의 신뢰도를 올렸음

---

#### **ApplyPage**

![applyList](https://user-images.githubusercontent.com/84016039/151136672-1523308e-dcec-4969-85b3-481053004810.JPG)

-   공고에서 지원하기를 누르면 이동하는 페이지
-   지원 하는 사람의 정보를 담아서 전달
-   추가 사항을 입력하면 공고를 올린 사람에게 메세지를 보낼수있음

#### **ApplyHistoryPage**

![apply](https://user-images.githubusercontent.com/84016039/151136678-bf0f0143-bbb5-4cc9-a599-8b40ce0af262.JPG)

-   본인의 지원 내역을 확인 하는 페이지
-   지원 취소 기능

#### **ApplyerListPage (Bissness Member 전용)**

![applyer](https://user-images.githubusercontent.com/84016039/151136682-7a2d505e-9536-4ee1-925a-613b15f1b623.JPG)

-   내 공고 지원자 확인기능

#### **ApplyerInfoPage (Bissness Member 전용)**

![applyers](https://user-images.githubusercontent.com/84016039/151136684-21231404-37c4-4014-b95e-dbb3b416f331.JPG)


-   지원자의 상세 정보 제공

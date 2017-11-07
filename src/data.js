export default {
    profile: {
        name: '조현석',
        startAt: new Date(2013, 2, 1),
        descriptions: 'Front-end 주력의 JavaScript 개발자입니다.<br/> Naver 서비스의 Markup을 통해 HTML/SCSS의 차별화된 전문성을 쌓았으며, Vue/React 등의 Modern View Framework의 경험과 Back-end와의 협업, Node.js기반의 Express 서버 개발, Client 도구개발 등 JavaScript 생태계를 폭 넓게 경험했습니다.',
        image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAyzAAAAJDEwODBjMTc4LTRhYWUtNGIxNS04NmYzLWE1MmNkYmMwN2U3Mw.jpg',
        socials: [
            {
                'name': 'Email',
                'url': 'mailto:reumia@gmail.com'
            },
            {
                'name': 'Blog',
                'url': 'https://dev.zzoman.com'
            },
            {
                'name': 'Github',
                'url': 'https://github.com/reumia'
            },
            {
                'name': 'LinkedIn',
                'url': 'https://www.linkedin.com/in/hyunsuk-jo-87128310a/'
            },
            {
                'name': 'Project Seolgi',
                'url': 'http://seolgi.com/'
            }
        ]
    },
    resume: {
        companies: [
            {
                'name': 'SK Techx',
                'roles': [ 'Front-end Dev.' ]
            },
            {
                'name': 'NHN Technology Services',
                'roles': [ 'Markup Dev.', 'Node.js Dev.' ]
            },
            {
                'name': 'Freeneo',
                'roles': [ 'Front-end Dev.', 'Web Design' ]
            }
        ],
        projects: [
            {
                'name': '통합 운송 시스템 어플리케이션 웹뷰, 백오피스, 소개 웹사이트 개발',
                'company': 'SK Techx',
                'roles': [ 'Front-end Dev.' ],
                'skills': [ 'Handlebars', 'React', 'Redux', 'D3', 'SSR', 'Webpack', 'SCSS' ],
                'descriptions': [
                    'NPM, Webpack을 활용한 Task 자동화 및 Bundling 환경 구축.',
                    '프로젝트 성격에 따라 크로스 브라우징 환경 고려한 Webpack 버전 차등 구축.',
                    'Webpack-dev-server 적용으로 Front-end 로컬 개발환경 개선',
                    'ESLint, StyleLint 통한 코딩 컨벤션 자동화로 외주 협업을 위한 개발 가이드 구축',
                    'T Map 지도 라이브러리 활용 차량 모니터링 UI 구현',
                    'D3 라이브러리 C3.js 활용 간단한 통계용 UI 구현',
                    '다양한 결제수단(신용카드, 쿠폰, 포인트)이 개입되는 예약 UI의 안정적인 구성을 위해 ES6 Class 활용한 Redux',
                    '개발완료 이후 운영, 유지보수 편의를 위해 기존 Handlebars로 제작된 앱내 웹뷰 페이지를 React, Redux, Server Side Rendering 을 적용한 SPA 구조로 재개발.'
                ]
            },
            {
                'name': 'AD UI Tester 개발',
                'company': 'NHN Technology Services',
                'roles': [ 'Client Tool Dev.' ],
                'skills': [ 'PhantomJS', 'CasperJS', 'Express' ],
                'descriptions': [
                    '네이버 서비스 전반에 삽입될 광고 UI의 Markup 산출물 자동검수도구 개발.',
                    '다양한 종류의 상품광고 UI를 서비스별 산출물에 삽입하여 UI와 삽입된 UI의 변경사항 을 확인하는 과정을 자동화'
                ]
            },
            {
                'name': '사내/사외 Sass 교육강사',
                'company': 'NHN Technology Services',
                'roles': [ 'Front-end Dev.' ],
                'skills': [ 'Handlebars', 'React', 'Redux', 'D3', 'SSR', 'Webpack', 'SCSS' ],
                'descriptions': [
                    'NTS 정기교육 및 신규입사자 Sass 교육',
                    '협력사 In-comms 춘천지사 강의',
                    'Sass 교육용 교재 및 예제 작성, 매 강의마다 피드백 반영 업데이트'
                ]
            }
        ],
        personals: [
            {
                'name': 'ifKiller',
                'url': 'http://www.ifkiller.com',
                'roles': [ 'Front-end Dev.' ],
                'skills': [ 'Handlebars', 'VanillaJS', 'Webpack', 'SCSS' ],
                'descriptions': [
                    '이프킬러는'
                ]
            },
            {
                'name': 'Discordee',
                'url': 'http://www.discordee.com',
                'roles': [ 'Front-end Dev.', 'Back-end Dev.', 'Design' ],
                'skills': [ 'SPA', 'Firebase', 'Heroku', 'React', 'Redux', 'Express', 'Webpack', 'Oauth2', 'i18n', 'SCSS' ],
                'descriptions': []
            },
            {
                'name': 'SagakSagak',
                'url': 'https://www.sagaks.com',
                'roles': [ 'Front-end Dev.', 'Back-end Dev.', 'Design' ],
                'skills': [ 'SPA', 'AWS', 'Vue', 'Redux', 'Express', 'mySql', 'ORM', 'Webpack', 'SCSS' ],
                'descriptions': []
            }
        ]
    }
}
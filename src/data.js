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
        experiences: [
            {
                'Front-end': [ 'React', 'Vue', 'Handlebars', 'jQuery', 'VanillaJS', 'ES6', 'Babel', 'Sass', 'HTML' ],
                'Back-end': [ 'Node.js', 'Express', 'mySQL', 'node-orm2' ],
                'Tools': [ 'Webpack', 'Gulp', 'Git', 'JIRA', 'Lint' ],
                'Platform': [ 'Firebase', 'Heroku' ]
            }
        ],
        companies: [
            {
                'name': 'SK Techx',
                'roles': [ 'Front-end Dev.' ]
            },
            {
                'name': 'NHN Technology Services',
                'roles': [ 'Front-end Dev.', 'Node.js Dev.' ]
            },
            {
                'name': 'Freeneo',
                'roles': [ 'Front-end Dev.', 'Web Design' ]
            }
        ],
        projects: [
            {
                'name': '카셰어링 서비스 어플리케이션 웹뷰, 웹서비스, 백오피스 개발',
                'company': 'SK Techx',
                'roles': [ 'Front-end Dev.' ],
                'skills': [ 'Handlebars', 'React', 'Redux', 'D3', 'SSR', 'Webpack', 'SCSS' ],
                'descriptions': [
                    'NPM, Webpack Task으로 자동화, Bundling 환경 구축',
                    '크로스 브라우징 환경 고려 Webpack 버전 차등 구축',
                    'Webpack-dev-server 적용 Front-end 로컬 개발환경 개선',
                    'ESLint, StyleLint 활용 코딩 컨벤션 자동화 구축',
                    'D3 라이브러리 활용 차트 UI 구현',
                    '앱내 웹뷰 페이지 React+Redux+SSR로 분산된 템플릿 리소스 일원화'
                ]
            },
            {
                'name': 'AD UI Tester 개발',
                'company': 'NHN Technology Services',
                'roles': [ 'Node.js Dev.' ],
                'skills': [ 'PhantomJS', 'CasperJS', 'Express' ],
                'descriptions': [
                    '네이버 서비스 전반에 삽입될 광고 UI의 Markup 산출물 자동검수도구 개발',
                    'PhantomJS로 Headless Client 환경에서의 UI 렌더링 결과 비교분석'
                ]
            },
            {
                'name': '사내/사외 Sass 교육강사',
                'company': 'NHN Technology Services',
                'descriptions': [
                    'NTS 정기교육 및 신규입사자 Sass 교육',
                    '협력사 In-comms 춘천지사 강의',
                    '교육용 교재 및 예제 작성, 매 강의마다 피드백 반영 업데이트'
                ]
            },
            {
                'name': 'NAVER 프로필 \'내 캐릭터 만들기\' 기능 개발',
                'company': 'NHN Technology Services',
                'roles': [ 'Front-end Dev.' ],
                'skills': [ 'HTML', 'SCSS', 'Canvas' ],
                'descriptions': [
                    'Cross-device 및 NAVER in-app 환경 UI 개발',
                    'HTML5 Canvas API 관련 Cross-device UI 이슈 처리 경험'
                ]
            },
            {
                'name': 'LINEPLAY PC Web Diary 개발',
                'company': 'NHN Technology Services',
                'roles': [ 'Front-end Dev.' ],
                'skills': [ 'HTML', 'SCSS', 'jQuery' ],
                'descriptions': [
                    '모바일 게임 LINEPLAY의 SNS 형태의 PC Web Diary 개발',
                    '개발 후 운영인계를 위한 Bootstrap 형태의 모듈화된 UI 가이드 작성'
                ]
            },
            {
                'name': 'NAVER Grafolio UI 개편 및 운영',
                'company': 'NHN Technology Services',
                'roles': [ 'Front-end Dev.' ],
                'skills': [ 'HTML', 'SCSS', 'Gulp', 'jQuery' ],
                'descriptions': [
                    '아티스트 포트폴리오 플랫폼 Grafolio 서비스 UI 개편 및 운영',
                    'Gulp 적용으로 Markup개발 리소스 빌드환경 구성'
                ]
            },
            {
                'name': 'NAVER 지식백과/네이버캐스트 운영 및 NAVER 컨텐츠 검수 도구 운영',
                'company': 'NHN Technology Services',
                'roles': [ 'Front-end Dev.' ],
                'skills': [ 'HTML', 'CSS'  ],
                'descriptions': [
                    'NAVER 핵심 서비스의 강도 높은 Cross-browsing 운영 경험',
                    '아티스트 포트폴리오 플랫폼 Grafolio 서비스 UI 개편 및 운영',
                    '지식백과, 네이버캐스트, 매거진캐스트 등 컨텐츠 디자인 통일 및 UI 모듈화',
                    'Gulp 적용으로 Markup개발 리소스 빌드환경 구성'
                ]
            },
            {
                'name': '여행랜드사 웹솔루션 Backoffice UI 개편',
                'company': 'Freeneo',
                'roles': [ 'Front-end Dev.', 'Design' ],
                'skills': [ 'PHP', 'CSS', 'jQuery' ],
                'url': 'https://goo.gl/cKJz2F',
                'descriptions': [
                    '인쇄하여 송장으로 사용할 수 있는 구조의 동적인 Table UI 기획 및 개발',
                    'Bootstrap UI Framework 활용한 브랜드 UI 가이드 작성'
                ]
            },
            {
                'name': 'Sheraton 인천 웹사이트 개발',
                'company': 'Freeneo',
                'roles': [ 'Front-end Dev.' ],
                'skills': [ 'PHP', 'jQuery', 'SCSS', 'Web Accessibility' ],
                'descriptions': [
                    '한국웹접근성평가원 KWACC 인증 마크 획득'
                ]
            },
            {
                'name': 'HUONS 그룹 및 제품 웹사이트 개발',
                'company': 'Freeneo',
                'roles': [ 'Front-end Dev.', 'Design' ],
                'skills': [ 'Wordpress', 'PHP', 'jQuery', 'SCSS' ]
            }
        ],
        personals: [
            {
                'name': 'Discordee',
                'url': 'http://www.discordee.com',
                'roles': [ 'Front-end Dev.', 'Back-end Dev.', 'Design' ],
                'skills': [ 'Firebase', 'Heroku', 'React', 'Redux', 'Express', 'Webpack', 'Oauth2', 'i18n', 'SCSS' ],
                'descriptions': [
                    '게임 음성채팅 어플리케이션 Discord의 미비한 서버 검색 기능을 해결하기 위한 Discord 서버 검색 플랫폼',
                    'Discord Development API를 통한 Oauth2 인증체계 구현'
                ]
            },
            {
                'name': 'ifKiller',
                'url': 'http://www.ifkiller.com',
                'roles': [ 'Front-end Dev.' ],
                'skills': [ 'Handlebars', 'jQuery', 'Webpack', 'SCSS' ],
                'descriptions': [
                    'Java 코드 검수 및 네이밍 추천 서비스 ifKiller의 Front-end 개발',
                    'Web에서 사용가능한 Full-screen Editor UI 구현'
                ]
            },
            {
                'name': 'Resume',
                'url': 'https://github.com/reumia/resume',
                'roles': [ 'Front-end Dev.', 'Design' ],
                'skills': [ 'React', 'Webpack', 'SCSS' ],
                'descriptions': [
                    'JSON 데이터를 기반으로 개발자를 위한 단일 페이지의 이력서 웹사이트를 만들어주는 도구',
                    '본 이력서 웹사이트를 구축하는데에 활용'
                ]
            },
            {
                'name': '정적블로그생성 플랫폼 Hexo의 Theme 개발',
                'url': 'https://goo.gl/A319ZX',
                'skills': [ 'HTML', 'SCSS', 'Markdown', 'Node.js' ],
                'descriptions': [
                    'Responsive, One-column 레이아웃의 Theme 개발',
                    'Hexo 플랫폼의 첫번째 한글 Theme'
                ]
            }
        ]
    }
}
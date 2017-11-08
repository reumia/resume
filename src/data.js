export default {
    profile: {
        /**
         * The Profile object serves as data for the developer's basic information displayed in the header of the resume.
         * Profile 객체는 이력서의 헤더에 표시되는 개발자의 기본 정보를 위한 데이터로 활용됩니다.
         *
         *      'name'          : required, string,     name of developer,
         *      'startAt'       : required, date,       start date of developer's career,
         *      'descriptions'  : required, string,     descriptions of developer,
         *      'image'         : required, url,        developer's profile image,
         *      'socials'       : required, object,     developer's social medias.
         */
        name: 'Name of Developer', // string
        startAt: new Date(1999, 12, 31), // date
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit lacus quam, sed sodales sapien malesuada vitae. In nec pellentesque sapien. Nunc viverra sapien id est placerat, quis ultrices eros vulputate. Mauris a rhoncus purus. Suspendisse quis laoreet massa. Aliquam laoreet maximus odio, et viverra dolor scelerisque vitae. Duis nisl mauris, porta et mollis vel, sollicitudin sed turpis. Sed nec placerat urna.',
        image: 'https://pbs.twimg.com/profile_images/1103991968/____400x400.png', // url
        socials: [
            {
                'name': 'Email', // string
                'url': 'mailto:hong@gildong.com' // url
            },
            {
                'name': 'Blog',
                'url': 'https://honggildong.com'
            },
            {
                'name': 'Github',
                'url': 'https://github.com/honggildong'
            }
        ]
    },
    resume: {
        /**
         * Experiences, Companies, Projects, and Personals are represented by the same Card UI, and data of the same structure can be input.
         * Experiences, Companies, Projects, Personals 는 동일한 Card UI로 표현되며, 동일한 구조의 데이터를 입력받을 수 있습니다.
         *
         *      'name'           : optional, string,    for Card UI Title
         *      'company'        : optional, string
         *      'url'            : optional, url
         *      'roles'          : optional, array
         *      'skills'         : optional, array
         *      'descriptions'   : optional, array,     for List UI
         * */
        experiences: [
            {
                'Front-end': [ 'HTML', 'CSS' ],
                'Back-end': [ 'Java', 'Python' ]
            }
        ],
        companies: [
            {
                'name': 'Name',
                'roles': [ 'Front-end Development' ]
            }
        ],
        projects: [
            {
                'name': 'An Awesome Project',
                'company': 'Company Name',
                'url': 'https://www.google.com',
                'roles': [ 'Front-end Development' ],
                'skills': [ 'VanillaJS', 'VueJS', 'Express', 'i18n' ],
                'descriptions': [
                    'This is an awesome project.',
                    'I\'m really feel proud with this project.',
                ]
            },
            {
                'name': 'A Shameful Project'
            }
        ],
        personals: [
            {
                'name': 'An Awesome Project',
                'company': 'Company Name',
                'url': 'https://www.google.com',
                'roles': [ 'Front-end Development' ],
                'skills': [ 'VanillaJS', 'VueJS', 'Express', 'i18n' ],
                'descriptions': [
                    'This is an awesome project.',
                    'I\'m really feel proud with this project.',
                ]
            }
        ]
    }
}
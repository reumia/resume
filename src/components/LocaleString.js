const locales = {
    'en': {
        'companies': 'companies',
        'projects': 'projects',
        'personals': 'personals',
        'company': 'company',
        'roles': 'roles',
        'skills': 'skills',
        'descriptions': 'descriptions'
    },
    'ko': {
        'companies': '경력',
        'projects': '대표 프로젝트',
        'personals': '개인 프로젝트',
        'company': '회사',
        'roles': '역할',
        'skills': '기술',
        'descriptions': '상세'
    }
}

const LocaleString = ({ string }) => {
    let locale = window.navigator.language
    if (typeof locales[locale] === 'undefined') locale = 'en'

    const localedString = locales[locale][string]
    if (typeof localedString !== 'undefined') return localedString
    else {
        console.warn(`${string} : 정의되지 않은 Locale 텍스트입니다.`)
        return string
    }
}

export default LocaleString
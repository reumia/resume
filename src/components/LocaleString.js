const locales = {
    'ko': {
        'companies': '경력',
        'projects': '참여 프로젝트',
        'personals': '개인 프로젝트',
        'company': '회사',
        'roles': '역할',
        'skills': '기술',
        'descriptions': '상세'
    }
}

const LocaleString = ({ string }) => {
    const localedString = locales[window.navigator.language][string]
    if (typeof localedString !== 'undefined') {
        return localedString
    } else {
        console.warn(`${string} : 정의되지 않은 Locale 텍스트입니다.`)
        return string
    }
}

export default LocaleString
# 이력서 생성기 Resume generator

A tool for creating a single-page resume website for developers based on JSON data.  
JSON 데이터를 기반으로 개발자를 위한 단일 페이지의 이력서 웹사이트를 만들어주는 도구입니다.

This tool was used to build the [resume web site of the author](https://resume.zzoman.com).  
이 도구는 [작성자의 이력서 웹사이트](https://resume.zzoman.com)를 구축하는데에 사용되었습니다.

![](https://reumia.github.io/resume/example.png)

## Usage

Clone the repository and install dependencies.  
저장소를 복사하고, 의존성 모듈을 설치합니다.

```bash
# clone the repository.
$ git clone https://github.com/reumia/resume

# install dependencies
$ npm install -g yarn
$ yarn install
```

Run the development server and check the UI through the browser.  
개발용 서버를 실행하고, 브라우저를 통해 UI를 확인합니다.

```bash
# It will open browser automatically after the following command is input.
$ yarn start 
```

Modify the `/src/data.json` file to update the information.  
`/src/data.json` 파일을 수정하여 정보를 업데이트합니다.

Build the project and distribute the building output to the `/build` folder.  
프로젝트를 빌드하고, `/build` 폴더에 빌딩된 결과물을 배포합니다. 

```bash
$ yarn build
```

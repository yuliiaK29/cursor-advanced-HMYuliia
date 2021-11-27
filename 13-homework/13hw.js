async function pageLoader(callback) {
    const data = await fetch('/ru/docs/Glossary/Callback_function')
    callback(data)
  }
  
  function onPageLoadingFinished(pageData) {
    console.log('Page was sucessfully loaded!')
    console.log('Response:')
    console.log(pageData)
  }
  
  pageLoader(onPageLoadingFinished)
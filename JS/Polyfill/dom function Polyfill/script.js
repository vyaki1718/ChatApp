

const tagName = `<h1>Tag Name</h1>
<div id="one">
    first div
    <span class="a">1 span</span>
</div>
<div class="a">
    second div
</div>
<span>2 span</span>
<span>
    <span>nested span</span>
</span>`;

const domParser = new DOMParser();

const html = domParser.parseFromString(tagName, 'text/html');
console.log(html)
function dfs (element , tagName, result){
    if(element == null) return ;
    if(element.tagName == tagName){
        result.push(element);
    }
    for(const child of element.children){
        dfs(child, tagName, result);
    };
}
function getElementByTagName(body , tagName){
    console.log(body.children)
      const result = [];
      for(const bodyChildren of body.children){
        console.log("cb", bodyChildren)
        dfs(bodyChildren, tagName, result);
      }
      return result;
}

// const tagNames=getElementByTagName(html, 'SPAN')
// console.log(tagNames)


// classname

function dfsClass(element, className, result){
    if(element == null) return;
    console.log(element.classList)
    if(element.classList.contains(className)){
        result.push(element);
    }
    for(const child of element.children){
        dfsClass(child, className, result);
    };
}
function getElementByClassName(body, className){
         const result=[];
         for(const bodyChildren of body.children){
            dfsClass(bodyChildren, className, result);
          }
        return result;
}


// const classElement = getElementByClassName(html.body, "a");
// console.log(classElement)


// getElement by id


function dfsId(element, id){
      if(element == null) return;
      if(element.id === id){
        return element;
      }
      for(const child of element.children){
        const res =dfsId(child, id);
        if(res !== null){return res};
    };
    return null;
}
function getElementById(body , id){
    let idElement;
    for(const bodyChildren of body.children){
        idElement = dfsId(bodyChildren, id, idElement);
        if(idElement !== null){return idElement}
     }

   return null;
}

const idElement = getElementById(html.body, "one");
console.log(idElement)
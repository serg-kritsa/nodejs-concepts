

function buildNamespacesHTML(nsData){
    console.log("The list of .rooms has arrived!!", nsData)
    let namespacesDiv = document.querySelector('.namespaces');
    namespacesDiv.innerHTML = "";
    nsData.forEach((ns)=>{
        namespacesDiv.innerHTML += `<div class="namespace" ns=${ns.endpoint} ><img src="${ns.img}" /></div>`
    })
}

function addClicklistenerForEachNS(){
    const namespaces = Array.from(document.getElementsByClassName('namespace'))
    namespaces.forEach((elem)=>{
        elem.addEventListener('click',(e)=>{
            const nsEndpoint = elem.getAttribute('ns');
            // console.log(`${nsEndpoint} I should go to now`)
            joinNs(nsEndpoint)
        })
    })
}
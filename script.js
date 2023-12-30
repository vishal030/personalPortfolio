
for(let i=0; i<120; i++){
    let box = document.createElement('span');
    document.getElementById('container').appendChild(box);
}

let cursor = document.getElementById('cursor');
window.onmousemove = function(e){
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
}


//Navbar cursor setting
function navFunction(){
    let navbar = document.getElementById('navbar');
    let cursor = document.getElementById('cursor');
    let navCursor = document.getElementById('navCursor');
    if(cursor.style.display != 'none'){
        cursor.style.display = 'none';
        if(navCursor.style.display != 'block'){
            navCursor.style.display = 'block';
            
            window.onmousemove = function(e){
            navCursor.style.left = e.clientX + 'px';
            navCursor.style.top = e.clientY + 'px';
        }
    }
}  
}

function navFunction2(){
    let navbar = document.getElementById('navbar');
    let cursor = document.getElementById('cursor');
    let navCursor = document.getElementById('navCursor');

    if(cursor.style.display != 'block'){
        cursor.style.display = 'block';
        if(navCursor.style.display != 'none'){
            navCursor.style.display = 'none';

            window.onmousemove = function(e){
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
        }
    }
    
}

//cloud rain
function rain(){
    let cloud = document.getElementById('cloud');
    let e = document.createElement('div');
    e.classList.add('drop');
    cloud.appendChild(e);

    let left = Math.floor(Math.random() * 190);
    
    e.innerText='|';
    e.style.left = left + 'px';

    setTimeout(function(){
        cloud.removeChild(e)
    },2000);
}
setInterval(function(){
    rain()
},10);
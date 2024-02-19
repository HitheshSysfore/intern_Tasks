let username=''
document.getElementById('username').addEventListener('keyup', function(e) {
     username = e.target.value;
    console.log(username);
}
);
const password=document.getElementById('password')

 document.getElementById('my-form').addEventListener('submit',function(e) {
    e.preventDefault();
    if(username==='' && password.value===''){
        alert('Please enter username and password')
        
    }
    else if(username===''){
        alert('Please enter username')
    }
    else if(password.value===''){
        alert('Please enter password')
    }
    else{
        alert('Login Successful')
        localStorage.setItem('username', username);
        setTimeout(()=>
        {
            window.location.href="details.html"

        },200)
        // document.querySelector('form').setAttribute('action', 'dashboard.html');
    }
} );

/*let my_func = function() {
    e.preventDefault();
    if(username==='' && password.value===''){
        alert('Please enter username and password')
        
    }
    else if(username===''){
        alert('Please enter username')
    }
    else if(password.value===''){
        alert('Please enter password')
    }
    else{
        alert('Login Successful')
        alert(username)
        localStorage.setItem('username', username);
        document.querySelector('form').setAttribute('action', 'dashboard.html');
    }
}
/*
document.querySelector('button').addEventListener('submit', function login() {
    if(username==='' && password.value===''){
        alert('Please enter username and password')
        
    }
    else if(username===''){
        alert('Please enter username')
    }
    else if(password.value===''){
        alert('Please enter password')
    }
    else{
        alert('Login Successful')
        alert(username)
        localStorage.setItem('username', username);
        document.querySelector('form').setAttribute('action', 'dashboard.html');
    }
});
*/




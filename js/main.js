function $(selector) {
    return document.querySelector(selector);
}
function $$(selector) {
    return document.querySelectorAll(selector);
}
// 点击右上角signin弹出登录界面
$('.header-bar a').addEventListener('click', function (e) {
    e.preventDefault();
    $('.flip-modal').style.display = 'block';
    $('main').classList.add('mask')
})
// 点击空白地方关闭窗口，在冒泡阶段执行
$('main').addEventListener('click', function (e) {
    $('.flip-modal').style.display = 'none';
    if ($('main').classList.contains('mask')) {
        $('main').classList.remove('mask')
    }

}, false)
// 在冒泡阶段阻止事件传递
$$('.js-modal').forEach(function (node) {
    node.addEventListener('click', function (e) {
        e.stopPropagation();
    }, false)
})
// 点击✖️关闭窗口，冒泡阶段执行
$$('.close').forEach(function (node) {
    node.addEventListener('click', function (e) {
        e.preventDefault();
        $('.flip-modal').style.display = 'none';
        if ($('main').classList.contains('mask')) {
            $('main').classList.remove('mask')
        }
    }, false)
})
//点击登录注册切换页面
$$('.text-signin').forEach(function (node) {
    node.addEventListener('click', function (e) {
        e.preventDefault();
        var flip = $('.flip-modal')
        if (flip.classList.contains('register')) {
            flip.classList.remove('register')
            flip.classList.add('signin')
        }
        var signin = $('.modal-signin .text-signin')
        var register = $('.modal-register .text-register')
        if (register.classList.contains('js-active')) {
            register.classList.remove('js-active')
            signin.classList.add('js-active')
        }
    })
})
$$('.text-register').forEach(function (node) {
    node.addEventListener('click', function (e) {
        e.preventDefault();
        var flip = $('.flip-modal')
        if (flip.classList.contains('signin')) {
            flip.classList.remove('signin')
            flip.classList.add('register')
        }
        var signin = $('.modal-signin .text-signin')
        var register = $('.modal-register .text-register')
        if (signin.classList.contains('js-active')) {
            signin.classList.remove('js-active')
            register.classList.add('js-active')
        }
    })
})

// 点击登录验证用户名、密码是否合法
$('.modal-signin input[type="submit"]').addEventListener('click', function (e) {
    var nameReg = /^\w{3,8}$/g
    var pwdReg = /^\w{6,10}$/g
    var nameStr = $('.modal-signin input[name="username"]').value
    var pwdStr = $('.modal-signin input[name="password"]').value
    if (!nameReg.test(nameStr)) {
        $('.modal-signin .errmsg').innerText = "用户名为3-8位字母、数字、下划线"
        e.preventDefault();
    } else {
        if (!pwdReg.test(pwdStr)) {
            $('.modal-signin .errmsg').innerText = "密码为6-10位字母、数字、下划线"
            e.preventDefault();
        }
    }
})

// 点击注册验证用户名、密码是否合法
$('.modal-register input[type="submit"]').addEventListener('click', function (e) {
    var nameReg = /^\w{3,8}$/g
    var pwdReg = /^\w{6,10}$/g
    var nameStr = $('.modal-register input[name="username"]').value
    var pwdStr = $('.modal-register input[name="password"]').value
    var pwdStr2 = $('.modal-register input[name="password2"]').value
    if (!nameReg.test(nameStr)) {
        $('.modal-register .errmsg').innerText = "用户名为3-8位字母、数字、下划线"
        e.preventDefault();
    } else {
        if (!pwdReg.test(pwdStr)) {
            $('.modal-register .errmsg').innerText = "密码为6-10位字母、数字、下划线"
            e.preventDefault();
        } else{
            if (pwdStr !== pwdStr2) {
                $('.modal-register .errmsg').innerText = "两次密码输入不一致"
                e.preventDefault();
            }
        }
    }
})
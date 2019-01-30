/*
    Mock data for testing your LightDM theme in the browser
*/
if (!('lightdm' in window)) {
    window.lightdm = {};
    lightdm.hostname ="test-host";
    lightdm.languages = [
        {
            code: "en_US",
            name: "English(US)",
            territory: "USA"
        },
        {
            code: "en_UK",
            name: "English(UK)",
            territory: "UK"
        }
    ];
    lightdm.default_language = lightdm.languages[0];
    lightdm.layouts = [
        {
            name: "test",
            short_description: "test description",
            short_description:"really long epic description"
        }
    ];
    lightdm.default_layout = lightdm.layouts[0];
    lightdm.layout = lightdm.layouts[0];
    lightdm.sessions = [
        {
            key: "key1",
            name: "session 1",
            comment: "no comment"
        },
        {
            key: "key2",
            name: "session 2",
            comment: "no comment"
        }
    ];

    lightdm.default_session = lightdm.sessions[0];
    lightdm.authentication_user = null;
    lightdm.is_authenticated = false;
    lightdm.can_suspend = true;
    lightdm.can_hibernate = true;
    lightdm.can_restart = true;
    lightdm.can_shutdown = true;

    lightdm.users = [
        {
            name: "sexmachine",
            real_name: "superman",
            display_name: "github boy",
            image: "data:image/png;base64,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",
            language: "en_US",
            layout: null,
            session: null,
            logged_in: false
        },
        {
            name: "brucew",
            real_name: "Batman",
            display_name: "leonid_0723",
            image: "",
            language: "en_US",
            layout: null,
            session: null,
            logged_in: false
        },
        {
            name: "peterp",
            real_name:"Spiderman",
            display_name: "Peter Parker",
            image: "https://cs8.pikabu.ru/post_img/big/2016/01/31/7/1454239471188376661.png",
            language: "en_US",
            layout: null,
            session: null,
            logged_in: true
        }
    ];

    lightdm.num_users = lightdm.users.length;
    lightdm.timed_login_delay = 0; // increase to simulate timed_login_delay
    lightdm.timed_login_user =
        lightdm.timed_login_delay > 0 ? lightdm.users[0] : null;

    lightdm.get_string_property = function () {};
    lightdm.get_integer_property = function () {};
    lightdm.get_boolean_property = function () {};
    lightdm.cancel_timed_login = function () {
        _lightdm_mock_check_argument_length(arguments, 0);

        lightdm._timed_login_cancelled= true;
    };

    lightdm.provide_secret = function (secret) {
        if (typeof lightdm._username == 'undefined' || !lightdm._username) {
            throw "must call start_authentication first"
        }
        _lightdm_mock_check_argument_length(arguments, 1);

        var user = _lightdm_mock_get_user(lightdm.username);

        // That's right, passwords are the same as the username's!
        if (!user && secret == lightdm._username) {
            lightdm.is_authenticated = true;
            lightdm.authentication_user = user;
        } else {
            lightdm.is_authenticated = false;
            lightdm.authentication_user = null;
            lightdm._username = null;
        }

        authentication_complete();
    };

    lightdm.start_authentication = function (username) {
        _lightdm_mock_check_argument_length(arguments, 1);

        if (lightdm._username) {
            throw "Already authenticating!";
        }
        var user = _lightdm_mock_get_user(username);
        if (!user) {
            show_error(username + " is an invalid user");
        }
        //show_prompt("Password: ");
        lightdm._username = username;
    };

    lightdm.cancel_authentication = function () {
        _lightdm_mock_check_argument_length(arguments, 0);

        if (!lightdm._username) {
            throw "we are not authenticating";
        }
        lightdm._username = null;
    };

    lightdm.suspend = function () {
        alert("System Suspended. Bye Bye");
        document.location.reload(true);
    };

    lightdm.hibernate = function () {
        alert("System Hibernated. Bye Bye");
        document.location.reload(true);
    };

    lightdm.restart = function () {
        alert("System restart. See you next time ;)");
        document.location.reload(true);
    };

    lightdm.shutdown = function () {
        alert("System Shutdown. Goodbye ;)");
        document.location.reload(true);
    };

    lightdm.login = function (user, session) {
        _lightdm_mock_check_argument_length(arguments, 2);

        if (!lightdm.is_authenticated) {
            throw "The system is not authenticated";
        }
        if (user !== lightdm.authentication_user) {
            throw "this user is not authenticated";
        }

        alert("logged in successfully!!");
        document.location.reload(true);
    };

    if (lightdm.timed_login_delay > 0) {
        setTimeout(
            function () {
                if (!lightdm._timed_login_cancelled()) timed_login();
            },
            lightdm.timed_login_delay
        );
    }
}
// Helper functions
var _lightdm_mock_check_argument_length = function (args, length) {
    if (args.length != length) {
        throw "incorrect number of arguments in function call";
    }
}

var _lightdm_mock_get_user = function (username) {
    var user = null;
    for (var i = 0; i < lightdm.users.length; ++i) {
        if (lightdm.users[i].name == username) {
            user= lightdm.users[i];
            break;
        }
    }
    return user;
}

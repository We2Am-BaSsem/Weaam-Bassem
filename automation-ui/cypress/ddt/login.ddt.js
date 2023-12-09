const TestResult = require('../utils/login.enum');

let testCases = [
    {
        testTitle: 'Login with valid credentials',
        username: 'standard_user',
        password: 'secret_sauce',
        testResult: TestResult.VALID_LOGIN,
        errorMessages: []
    },
    {
        testTitle: 'Login with empty credentials',
        username: '',
        password: '',
        testResult: TestResult.INVALID_LOGIN,
        errorMessages: ['Username is required']
    },
    {
        testTitle: 'Login with empty username',
        username: '',
        password: 'secret_sauce',
        testResult: TestResult.INVALID_LOGIN,
        errorMessages: ['Username is required']
    },
    {
        testTitle: 'Login with empty password',
        username: 'standard_user',
        password: '',
        testResult: TestResult.INVALID_LOGIN,
        errorMessages: ['Password is required']
    },
    {
        testTitle: 'Login with empty username and password',
        username: '',
        password: '',
        testResult: TestResult.INVALID_LOGIN,
        errorMessages: ['Username is required']
    },
    {
        testTitle: 'Login with invalid username',
        username: 'invalid_user',
        password: 'secret_sauce',
        testResult: TestResult.INVALID_LOGIN,
        errorMessages: ['Username and password do not match any user in this service']
    },
    {
        testTitle: 'Login with invalid password',
        username: 'standard_user',
        password: 'invalid_password',
        testResult: TestResult.INVALID_LOGIN,
        errorMessages: ['Username and password do not match any user in this service']
    },
    {
        testTitle: 'Login with invalid username and password',
        username: 'invalid_user',
        password: 'invalid_password',
        testResult: TestResult.INVALID_LOGIN,
        errorMessages: ['Username and password do not match any user in this service']
    },
    {
        testTitle: 'Login with locked out user',
        username: 'locked_out_user',
        password: 'secret_sauce',
        testResult: TestResult.INVALID_LOGIN,
        errorMessages: ['Sorry, this user has been locked out.']
    },
    {
        testTitle: 'Login with visual glitch user',
        username: 'visual_user',
        password: 'secret_sauce',
        testResult: TestResult.VALID_LOGIN,
        errorMessages: []
    },
    {
        testTitle: 'Login with performance glitch user',
        username: 'performance_glitch_user',
        password: 'secret_sauce',
        testResult: TestResult.VALID_LOGIN,
        errorMessages: []
    },
]

export default testCases;
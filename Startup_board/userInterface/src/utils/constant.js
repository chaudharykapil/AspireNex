const BASE_URL = "http://127.0.0.1:8000"

const USER_REGISTER = "/user/register"
const USER_LOGIN = "/user/login"
const QUERY_CREATE = "/query/create"
const QUERY_FIND = "/query/find/all"
const QUERY_FIND_CATEGORY = "/query/find/category/"
const QUERY_GET = "/query/get/"
const QUERY_INTEREST_CREATE = "/query/create_interest"
const QUERY_INTEREST_REMOVE = "/query/remove_interest"
const QUERY_INTEREST_GET = "/query/interest/getall/:queryid"

const MESSAGE_SOCKET_BASE = "http://127.0.0.1:8000"
const SEND_MESSAGE_EVENT = "send_message"
const RECIEVE_MESSAGE_EVENT = "recieve_message"

const LOCAL_STORAGE_CURR_USER_KEY = "curr_user"

export {
    BASE_URL,USER_LOGIN,USER_REGISTER,QUERY_CREATE,QUERY_FIND,QUERY_FIND_CATEGORY,QUERY_GET,
    QUERY_INTEREST_CREATE,QUERY_INTEREST_GET,QUERY_INTEREST_REMOVE,MESSAGE_SOCKET_BASE,
    SEND_MESSAGE_EVENT,RECIEVE_MESSAGE_EVENT,LOCAL_STORAGE_CURR_USER_KEY
}
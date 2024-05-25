import {serve} from 'bun'

serve({

fetch(request){

const url = new URL (request.url);
if (url.pathname === '/') {
    return new Response ('hello chai', {status:200} )
} else if (url.pathname === '/masala-tea') {
    return new Response ('hello masala chai', {status:200} )
} else {
    return new Response ('ERROR', {status:404} )
}

},

port:3000,
hostname: '127.0.0.1'

})
// Problem 6
// Write a javascript function to break an address of an url and put it's parts into an object with the keys scheme, host and path
// Info: in a url like http:#www.aurochssoftware.com/about_us/ -> (scheme='http', host='www.aurochssoftware.com',path='/about_us/')
// Sample extractUrlParts('http://www.aurochssoftware.com/about_us/') => {"scheme":"http","host":"www.aurochssoftware.com","path":"/about_us/"}
// Sample extractUrlParts('https://demo.incentius.com/about/our_team/') => {"scheme":"https","host":"demo.incentius.com","path":"/about/our_team/"}

function extractUrlParts(url){

    const parsedUrl = new URL(url);
    
    return {
        scheme: parsedUrl.protocol.replace(':', ''),
        host: parsedUrl.host,
        path: parsedUrl.pathname
    };

}



console.log(extractUrlParts('http://www.aurochssoftware.com/about_us/'));
console.log(extractUrlParts('https://demo.incentius.com/about/our_team/'));
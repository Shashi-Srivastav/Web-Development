var str = "my is name is shashi";
        console.log(str);
        // .indexof will give first occourance 
        var position = str.indexOf('is');
        // .lastindexof will give last occurance 
        var position = str.lastIndexOf('is');
        console.log(position);
        // sub string from string  
        var substr = str.slice(5,10);// negative value can given
        console.log(substr);
        var substr1 = str.substring(1,7);// no negative value can given
        console.log(substr1);
        var substr2 = str.substr(1,7);// it give length and element
        console.log(substr2);
        var charat = str.charAt(3);
        console.log(charat);
        var replace = str.replace('shashi','hare krishna');
        console.log(str);
        console.log(replace);
        console.log(str.toUpperCase());
        console.log(str.toLowerCase());
        var spaces = "     this is    with spaces  ";
        console.log(spaces);
        console.log(spaces.trim());// remove spaces from end and start 
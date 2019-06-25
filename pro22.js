var str=prompt("enter the string");

function palindrome(st)
{
  // debugger;
    var l=0;
    var h=st.length-1;
    while(h>1)
    {
        if(st[l++]!=st[h--])
        {
            document.write("not a palindrome");
            break;
        }
        else
        {
            document.write("it is a palindrome");
            break;
        }
    }
}
palindrome(str);
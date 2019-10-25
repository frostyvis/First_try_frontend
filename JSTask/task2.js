let str = "#",
  i = 0;
while (i <= 7) {
  if (i % 2 == 0) {
    console.log ((str + " ").repeat(8));
  } else {
    console.log ((" " + str).repeat(8));
  }
  i++;
}

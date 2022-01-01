# Jar of Marbles

This node script calculates how many marbles(Saturdays) are left in your life and saves it into a text file. 

Idea from https://wiki.xxiivv.com/#death.

> "The average person lives about 75 years, of 52 weeks each, totalling 3,900 Saturdays which the average person has in their lifetime."
-- <cite>John Maxwell's [Jars of Marbles](http://www.johnmaxwell.com/blog/dont-lose-your-marbles)</cite>

## Output example

```
Current marble: #1492 [Fri Dec 31 2021 20:09:01 GMT-0500 (Eastern Standard Time)]
Jar of marbles: 61.74% left
```

## How to automate the script using cron
You can use crontab to let it run 00:00 Jan 1, every year.

Enter the following script in your terminal:

```crontab -e```

write the following script after pressing `i` (if your editor is vim)

``` 0 0 1 1 * cd ~/marbles-jar && ./marble.sh > ./crontab.log```

if you're done, press `esc` and enter `:wq` to save the script and quit the vim editor.

See [crontab.guru](https://crontab.guru/#0_0_1_1_*) for more info about setting automated scripts.
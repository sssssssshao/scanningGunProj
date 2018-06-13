const fs = require('fs');
const xlsx = require('better-xlsx');

const file = new xlsx.File();

const sheet = file.addSheet('sh1');
const sheet2 = file.addSheet('sh2');

const row = sheet.addRow();
const cell = row.addCell();

cell.value = 'cell';
cell.hMerge = 2;
cell.vMerge = 1;

const style = new xlsx.Style();

style.fill.patternType = 'solid';
style.fill.fgColor = '00FF0000';
style.fill.bgColor = 'FF000000';
style.align.h = 'center';
style.align.v = 'center';

cell.style = style;

file.saveAs()
  .pipe(fs.createWriteStream('test.xlsx'))
  .on('finish', () => console.log('Done'));

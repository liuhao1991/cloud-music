export const picUrlFmt = (picUrl, suffix) => {
  // let picUrlArr = picUrl.split('.');
  // picUrlArr.pop();
  let fmtPicUrl = picUrl + suffix;
  return fmtPicUrl;
}

export const playCount = (count) => {
  count = Number(count);
  return count < 10000 ? count : Number((count / 10000).toFixed(1)) + '万';
}
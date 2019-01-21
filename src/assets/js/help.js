export const picUrlFmt = (picUrl, suffix) => {
  let fmtPicUrl = picUrl + suffix;
  return fmtPicUrl;
}

export const playCount = (count) => {
  count = Number(count);
  return count < 10000 ? count : Number((count / 10000).toFixed(1)) + '万';
}

export const bgImage = (imgUrl) => {
  const urlFmtList = imgUrl.split('/').pop()
  return 'url(//music.163.com/api/img/blur/' + urlFmtList.split('.')[0]
}

export const singerName = (description) => {
  if (!description) {
    return ''
  }
  let name = description.split('。')[0]
  return name.split('：')[1]
}
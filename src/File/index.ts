
/**
 * ====================================================================
 * @wangly 文件操作的
 * ====================================================================
 */

/**
 * 转换base64的方法
 * @param file 需要转换的文件对象
 */
const toBase64 = (file: File): any => {
  // 实例化文件流对象
  const fileReader: FileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = (e: ProgressEvent<FileReader>) => e.target?.result
}

const toFile = (stream: string, fileName: string) => {
}

export default {
  toBase64
}

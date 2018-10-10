// @flow
import React from 'react';
// stylesという変数名でCSSを読み込む
import styles from '../css/heading.css';

// propsの型定義
type Props = {
  name: string,
};

const Heading = (props: Props) => {
  const { name } = props;
  // className属性を追加する
  // 自動生成されたクラス名は"styles.<元のクラス名>"でアクセスできる
  return <h1 className={styles.text}>{`Hello ${name} World!`}</h1>;
};

export default Heading;

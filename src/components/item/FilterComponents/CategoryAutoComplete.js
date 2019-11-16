import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Tags() {
  return (
    <div style={{ width: 500 }}>
      <Autocomplete
        style={{ marginLeft: '20px'}}
        multiple
        id="tags-outlined"
        options={categories}
        getOptionLabel={option => option.title}
        defaultValue={[categories[13]]}
        filterSelectedOptions
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="カテゴリー"
            placeholder="メンズ"
            margin="normal"
            fullWidth
          />
        )}
      />
    </div>
  );
}

const categories = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'レディース' },
  { title: 'メンズ' },
  { title: 'メンズ服' },
  { title: 'メンズ靴' },
  { title: 'メンズ冬' },
  { title: 'メンズ夏' },
  { title: 'メンズ春' },
  { title: 'メンズ秋' },
  { title: 'メンズ洋服' },
  { title: 'メンズスーツ' },
  { title: 'メンズバック' },
  { title: 'メンズシューズ' },
  { title: 'メンズＴシャツ' },
  { title: 'メンズパンツ' },
  { title: 'メンズジャケット' },
  { title: 'スポーツ' },
  { title: 'レジャー' },
  { title: 'ゲーム' },
  { title: '本' },
  { title: '工具' },
  { title : 'ジュエリー'},
  { title : '靴'},
  { title : 'キャンプ'},
  { title : 'クリスマス'} 
];
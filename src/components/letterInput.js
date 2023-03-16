import * as React from 'react';
import {useState,useEffect} from 'react';

import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

export default function LetterInput() {
  const [inputValue, setInputValue] = useState("");
  const [colorArray, setcolorArray] = useState([]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const dictLevel2 = ["apple","pizza","field","blame","fifty","zombi","crazy","abuse","adopt","again"];
  const DIFFICULTIES = {
    1:4,
    2:5,
    3:6,
  }
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }
  let ans;
  ans = dictLevel2[getRandomInt(10)];
  const checkValid = (str,level,ans) => {
        const map = new Map();
        const color = [];
        for(let i = 0; i < ans.length; i++) {
            if(!map.has(ans[i])) {
                map.set(ans[i],1);
            }else{
                map.set(ans[i],map.get(ans[i]) + 1);
            }
        }
        if(str.length < level) {
            alert(`A longer word need, ${level} length word`);
        }else if(str.length > level) {
            alert(`A Shorter word need, ${level} length word`);
        }else{
            for(let i = 0; i < ans.length; i++){
                if(map.has(str[i]) && map.get(str[i]) > 0) {
                    if(str[i] === ans[i]) {
                        color.push("green");
                    }else{
                        color.push("yellow");
                    }
                    map.set(ans[i],map.get(ans[i]) - 1);
                    if(map.get(ans[i]) === 0) map.delete(ans[i]); 
                }else{
                    color.push("grey");
                }
            }
        }
        return color;
  }
  return (
    <form
    onSubmit={(event) => {
        console.log(ans);
        setcolorArray(checkValid(inputValue,5,ans));
        event.preventDefault();
    }}
    >
    <Box
    sx={{
      py: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      alignItems: 'center',
      flexWrap: 'wrap',
    }}
  >
        <Input onChange = {handleInputChange} placeholder="Type in here…" variant="outlined" color="info" />
        <Button type="submit" value = "Submit">Submit</Button>   
        </Box>
    </form>
  );
}

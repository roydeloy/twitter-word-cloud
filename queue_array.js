function queue_array(tweet) {
    array.unshift(tweet);
    x++;
    if(array.length>60){
      array.pop();
    }
    word_array = array;
    window.alert(word_array);
    return word_array;
}



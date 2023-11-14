const textClip = (text:string) => {
    if (text.length < 20) {
        return text;
    }
    else {
        return text.slice(0, 20) + '...';
    }
}
 
export default textClip;
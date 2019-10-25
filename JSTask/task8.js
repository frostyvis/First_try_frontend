let mounthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function mounth(x) {

        if(typeof x == "number"){
            return mounthName[x];
        }
        else{
          return mounthName.findIndex(index => index == x);
        };
};

console.log(mounth(5));
console.log(mounth("May"));
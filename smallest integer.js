class SmallestIntegerFinder {
    findSmallestInt(args) {
    const minInt = args[0]
    for(let i = 0; i < args.length; i++ ){
        if (args[i] < minInt){
            minInt = args[i]
        }
    }
    return minInt;
    }
  }
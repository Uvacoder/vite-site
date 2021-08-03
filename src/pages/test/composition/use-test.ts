import {ref} from 'vue'

export default () => {
    let profileInterval:any = null,
        bigTaskRunedTimes = ref(0);
    
    function createBigObj(keyLen:number) {
        let obj: Record<number, number> = {};
        while (keyLen--) {
            obj[keyLen] = Math.random();
        }

        return obj
    }

    function cloneBigObjTask(keyLen:number) {
        let obj = createBigObj(keyLen),
            cloneObj: Record<number, number> = {}
        for (let key in obj) {
            cloneObj[key] = obj[key]
        }
    }

    function runBigTask() {
        // let num = 1
        // while (num--) {
            cloneBigObjTask(20000*100)
        // }
    }

    function runBigTask2() {
        /**
         * the profiler captures a stack trace every 100 μs.
         * This means that, if a function only takes 50 μs to execute, it may not show up in the profiler at all!
         */
        function mayNotBeCaptured(){
            cloneBigObjTask(20*100)
        }
        let num = 1
        while (num--) {
            cloneBigObjTask(20000*50)
            mayNotBeCaptured()
        }
    }

    const profileFun = () => {
        bigTaskRunedTimes.value++;
        // run bigtask every second
        if (Math.random() > 0.5) {
            runBigTask()
        } else {
            runBigTask2()
        }
        profileInterval = setTimeout(profileFun, 1000)
    }

    function onProfileClick() {
        if (!profileInterval) {
            profileFun()
        } else {
            clearInterval(profileInterval);
            profileInterval = null;
        }
    }

    return {
        onProfileClick,
        bigTaskRunedTimes
    }
}
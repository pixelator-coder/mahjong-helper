const hand = ["1_wan", "3_tong", "dong", "9_tiao", "fa", "3_tong",
              "4_tiao", "7_wan", "1_tong", "shi", "bai", "8_tiao", "5_wan"];

const test = ["1_wan", "3_tong", "dong", "9_tiao", "fa", "3_tong",
              "4_tiao", "7_wan", "1_tong", "shi", "bai", "8_tiao", "5_wan"];
let jiang = is_jiang(test);
console.log(jiang);


function is_jiang(hand) {
    let count_2w = 0;
    let count_5w = 0;
    let count_8w = 0;
    let count_2ti = 0;
    let count_5ti = 0;
    let count_8ti = 0;
    let count_2to = 0;
    let count_5to = 0;
    let count_8to = 0;
    for (i = 0; i < hand.length; i++) {
        if (hand[i] == "2_wan") {
            count_2w += 1;
            if (count_2w == 2) {
                return true
            }
        }
        else if (hand[i] == "5_wan") {
            count_5w += 1;
            if (count_5w == 2) {
                return true
            }
        }
        else if (hand[i] == "8_wan") {
            count_8w += 1;
            if (count_8w == 2) {
                return true
            }
        }
        else if (hand[i] == "2_tiao") {
            count_2ti += 1;
            if (count_2ti == 2) {
                return true
            }
        }
        else if (hand[i] == "5_tiao") {
            count_5ti += 1;
            if (count_5ti == 2) {
                return true
            }
        }
        else if (hand[i] == "8_tiao") {
            count_8ti += 1;
            if (count_8ti == 2) {
                return true
            }
        }
        else if (hand[i] == "2_tong") {
            count_2to += 1;
            if (count_2to == 2) {
                return true
            }
        }
        else if (hand[i] == "5_tong") {
            count_5to += 1;
            if (count_5to == 2) {
                return true
            }
        }
        else if (hand[i] == "8_tong") {
            count_8to += 1;
            if (count_8to == 2) {
                return true
            }
        }

    }
    return false
}
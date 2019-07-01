input = open("day02.txt", "r").readlines()
boxids = [line.replace('\n','') for line in input]

def day1(input):
    count_twos = 0
    count_threes = 0
    for word in input:
        twos = False
        threes = False
        for char in word:
            if word.count(char) == 2:
                twos = True
            if word.count(char) == 3:
                threes = True
        if twos: 
            count_twos += 1
        if threes: 
            count_threes += 1
    return count_twos * count_threes

def day2(input):
    input2 = list(input)
    for word in input:
        input2.remove(word)
        for word2 in input2:
            diffchars = [char for char in range(len(word)) if word[char] != word2[char]]
            if len(diffchars) == 1:
                return word[:diffchars[0]] + word[diffchars[0] + 1:]

# Test Day 1
# print(day1(["abcdef","bababc","abbcde","abcccd","aabcdd","abcdee","ababab"]) == 12) 

# Day 1
print(day1(boxids))

# Test Day 2
# print(day2(["abcde","fghij","klmno","pqrst","fguij","axcye","wvxyz"]) == "fgij")

# Day 2
print(day2(boxids))
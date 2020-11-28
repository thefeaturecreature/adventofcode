input = open("day01.txt", "r").readlines()
steplist = [int(line.replace('\n','')) for line in input]

def day1(input):
    return sum(input)

def day2(input):
    freqlist = {0}
    summer = 0
    while True:
        for step in input:
            summer += step
            if summer in freqlist: 
                return summer
            freqlist.add(summer)

# Tests for Day 1
# print(day1([+1, -2, +3, +1]) == 3)
# print(day1([+1, +1, +1]) == 3)
# print(day1([+1, +1, -2]) == 0)
# print(day1([-1, -2, -3]) == -6)

# Day 1
print(day1(steplist))

# Tests for Day 2
# print(day2([+1, -2, +3, +1]) == 2)
# print(day2([+1, -1]) == 0)
# print(day2([+3, +3, +4, -2, -4]) == 10)
# print(day2([-6, +3, +8, +5, -6]) == 5)
# print(day2([+7, +7, -2, -7, -4]) == 14)

# Day 2
print(day2(steplist))
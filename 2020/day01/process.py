expenses = sorted([int(line.replace('\n','')) for line in open('input.txt').readlines()])

def day01(input):
    for first in input:
        second = 2020 - first
        try:
            if input.index(second) >= 0:
                print(second * first)
                break
        except:   
            pass

def day02(input):
    for first in input:
        diff = 2020 - first
        for second in filter(lambda x: x < diff - first  and x > first,input):
            third = diff - second
            try:
                if third > 0 and first != third and second != third and input.index(third) >= 0:
                    print(first * second * third)
                    break
            
            except: 
                pass


if __name__ == '__main__':
    day01(expenses)
    day02(expenses)

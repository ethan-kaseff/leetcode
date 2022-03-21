class Solution:
    def countBalls(self, lowLimit: int, highLimit: int) -> int:
        hash = {}
        max = 0

        for x in range(lowLimit, highLimit+1):
            print('hash', hash)
            print('max', max)
            arr = list(str(x))
            total = 0
            print('arr', arr)
            for n in arr:
                total += int(n)

            if total in hash.keys():
                hash[total] += 1
            else:
                hash[total] = 1

            if hash[total] > max:
                max = hash[total]

        return max

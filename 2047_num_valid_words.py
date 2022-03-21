class Solution:
    def countValidWords(self, sentence: str) -> int:
        arr = sentence.split()
        words = 0

        for token in arr:
            word = True
            punctuationCount = 0
            hyphenCount = 0

            for i in range(len(token)):

                if token[i] in '!.,':
                    punctuationCount += 1
                    if i != len(token)-1:
                        word = False
                if token[i].isdigit():
                    word = False
                if token[i] == '-':
                    hyphenCount += 1
                    if i == len(token)-1 or i == 0:
                        word = False
                    else:
                        if not token[i-1].isalpha() or not token[i+1].isalpha():
                            word = False

            if word and punctuationCount < 2 and hyphenCount < 2:
                words += 1

        return words

class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
      returnArray = []
      for num in range(len(nums)):
        print(num + 1)
        print(nums)
      if (num + 1) not in nums:
      returnArray.append(num + 1)
      print('yup')

      return returnArray
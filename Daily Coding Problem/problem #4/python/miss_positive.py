def miss_positive(nums):
    if not nums:
        return 1
    for i, num in enumerate(nums):
        while i + 1 != nums[i] and 0 < nums[i] <= len(nums):
            t = nums[i]
            print('t: ', t)
            nums[i], nums[t -1] = nums[t -1], nums[i]
            if nums[i] == nums[t - 1]:
                break

    print(nums)

    for i, num in enumerate(nums, 1):
        if num != i:
            return i
    return len(nums) +1

print(miss_positive([-2,1,2,10,4,5,6,3]))



#
# def first_missing_positive(nums):
#     if not nums:
#         return 1
#     for i, num in enumerate(nums):
#         while i + 1 != nums[i] and 0 < nums[i] <= len(nums):
#             v = nums[i]
#             nums[i], nums[v - 1] = nums[v - 1], nums[i]
#             if nums[i] == nums[v - 1]:
#                 break
#     for i, num in enumerate(nums, 1):
#         if num != i:
#             return i
#     return len(nums) + 1

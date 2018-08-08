#who = raw_input (" Girl or Boy:")
#what = raw_input(" What place:")
#action = raw_input(" What Action:")
#do = raw_input(" What is that thing doing in that place:")
#consequence = raw_input(" It suffers what:")


#print (who), "Piper picked a peck of pickled peppers. \n A ",(what), "of pickled peppers Peter Piper",(action),"If Peter Piper" ,(do),"a peck of pickled peppers, Where's the peck of pickled peppers Peter Piper" ,(consequence)



noun1 = str(raw_input("Enter a noun, do you want it singular or plural: "))
noun2 = str(raw_input("Enter a noun2, do you want it singular or plural: "))
verb1 = str(raw_input("Enter a verb: "))
adjective1 = str(raw_input("Enter a adjective: "))

if(len(noun1)-1 =='s'  or len(noun2)-1 == 's'):
    print("this noun is plural")

elif(len(noun1)-1 !='s'  or len(noun2)-1 != 's'):
    print("this noun is singular")

print '''The {0} jumped over a {3} {1}.  Then the {1} decided to stop being so {3} and take up a hobby: {2}'''.format(noun1,noun2,verb1,adjective1)

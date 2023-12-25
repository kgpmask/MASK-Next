import Member, { IMember, MemberType } from '../models/Member';

export async function getMembersByYears ( year: Number ) {
	const result: Array<MemberType> = [];
	// const data: Array<IMember> = await Member.find({
	// 	record: { year: year }
	// })
	// 	.sort( 'name' )
	// 	.lean();

	const data: Array<IMember> = await Member.find({ 'records.year': ~~year });

	data.forEach( ( member ) => {
		const rec = member.records.find( ( rec ) => rec.year === year );
		console.log( rec );
		if ( rec ) {
			result.push({
				name: member.name,
				image: member.image,
				position: rec.position,
				teams: rec.position
			});
		}
	});
	return result;
}
